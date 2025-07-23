# lambda_function.py
import json
import boto3
import uuid
import os

# 从环境变量中获取S3存储桶名称
S3_BUCKET_NAME = os.environ.get('S3_BUCKET_NAME')
S3_REGION = os.environ.get('S3_REGION', 'ap-northeast-1') # 默认东京

s3_client = boto3.client('s3', region_name=S3_REGION)

def lambda_handler(event, context):
    try:
        # 从API Gateway传来的请求体中解析文件名和类型
        body = json.loads(event.get('body', '{}'))
        file_name = body.get('fileName')
        file_type = body.get('fileType')

        if not file_name or not file_type:
            return {
                'statusCode': 400,
                'body': json.dumps({'error': 'fileName and fileType are required'})
            }

        # 创建一个唯一的S3对象键（文件名）
        file_key = f"resumes/{uuid.uuid4()}-{file_name}"
        
        # 生成预签名URL
        presigned_url = s3_client.generate_presigned_url(
            'put_object',
            Params={
                'Bucket': S3_BUCKET_NAME,
                'Key': file_key,
                'ContentType': file_type
            },
            ExpiresIn=300  # URL 5分钟内有效
        )
        
        # 将URL和文件键返回给前端
        return {
            'statusCode': 200,
            'body': json.dumps({
                'uploadUrl': presigned_url,
                'fileKey': file_key
            })
        }

    except Exception as e:
        print(e)
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'Failed to generate pre-signed URL'})
        }