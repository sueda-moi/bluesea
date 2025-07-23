import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // 1. 从前端请求中获取文件名和类型
    const body = await req.json();
    const { fileName, fileType } = body;

    //  AWS 上创建的、用于生成预签名URL的Lambda函数的URL
    // TODO: 请将此URL替换为自己的Lambda函数URL
    const lambdaUrl = 'https://YOUR-UNIQUE-LAMBDA-URL.lambda-url.ap-northeast-1.on.aws/';
    
    // 3. 将请求转发给的Lambda函数
    const response = await fetch(lambdaUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fileName, fileType }),
    });

    if (!response.ok) {
      // 如果Lambda失败，将错误信息返回给前端
      const errorData = await response.json();
      return NextResponse.json({ error: 'Lambda function failed to generate URL', detail: errorData }, { status: response.status });
    }

    // 4. 将Lambda成功返回的预签名URL等信息，再返回给前端
    const data = await response.json(); // 应该包含 { uploadUrl, fileKey }
    return NextResponse.json(data);

  } catch (err) {
    console.error('API route /api/get-upload-url error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}