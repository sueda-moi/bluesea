import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // 1. 从前端获取所有申请的文本数据和S3文件key
    const body = await req.json();
    // body 的内容示例: { jobTitle: '...', name: '...', email: '...', resumeFileKey: 'resumes/...' }

    // 2. 这是在AWS上创建的、用于处理最终申请的Lambda函数的URL
    // TODO: 请将此URL替换为自己的Lambda函数URL
    const lambdaUrl = 'https://YOUR-SUBMISSION-LAMBDA-URL.lambda-url.ap-northeast-1.on.aws/';
    
    // 3. 将请求转发给的Lambda函数
    const response = await fetch(lambdaUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: 'Lambda function failed to process submission', detail: errorData }, { status: response.status });
    }

    const result = await response.json();
    return NextResponse.json({ message: 'Application submitted successfully', result });

  } catch (err) {
    console.error('API route /api/submit-application error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}