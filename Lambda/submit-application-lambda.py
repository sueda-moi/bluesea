# lambda_function.py for submit-application
import json
import boto3
import os

SENDER_EMAIL = os.environ.get('SENDER_EMAIL') # 例如 "no-reply@blueocean.co.jp"
RECIPIENT_EMAIL = os.environ.get('RECIPIENT_EMAIL') # 例如 "hr@blueocean.co.jp"
S3_BUCKET_NAME = os.environ.get('S3_BUCKET_NAME')
S3_REGION = os.environ.get('S3_REGION', 'ap-northeast-1')

ses_client = boto3.client('ses', region_name=S3_REGION)

def lambda_handler(event, context):
    try:
        body = json.loads(event.get('body', '{}'))
        
        job_title = body.get('jobTitle', 'N/A')
        name = body.get('name', 'N/A')
        email = body.get('email', 'N/A')
        phone = body.get('phone', 'N/A')
        cover_letter = body.get('coverLetter', 'N/A')
        resume_key = body.get('resumeFileKey', '')

        # 生成一个S3文件的可访问链接（如果需要的话，但这需要S3对象是公开的，或者生成预签名GET URL）
        # 为了简单和安全，我们只在邮件中提供文件路径(key)
        resume_location = f"S3 Bucket: {S3_BUCKET_NAME}, Key: {resume_key}"

        # 构造邮件内容
        email_subject = f"【新規応募】{job_title} - {name}様"
        email_body_html = f"""
            <html>
            <head></head>
            <body>
                <h1>新規応募がありました</h1>
                <p><strong>応募職種:</strong> {job_title}</p>
                <p><strong>応募者名:</strong> {name}</p>
                <p><strong>メールアドレス:</strong> {email}</p>
                <p><strong>電話番号:</strong> {phone}</p>
                <hr>
                <h2>カバーレター:</h2>
                <p style="white-space: pre-wrap;">{cover_letter}</p>
                <hr>
                <p><strong>履歴書・職務経歴書:</strong></p>
                <p>{resume_location}</p>
                <p><em>管理者はAWSコンソールから上記S3パスでファイルをご確認ください。</em></p>
            </body>
            </html>
        """

        # 发送邮件
        ses_client.send_email(
            Source=SENDER_EMAIL,
            Destination={'ToAddresses': [RECIPIENT_EMAIL]},
            Message={
                'Subject': {'Data': email_subject},
                'Body': {'Html': {'Data': email_body_html}}
            }
        )
        
        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Application processed successfully'})
        }

    except Exception as e:
        print(e)
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'Failed to process application'})
        }