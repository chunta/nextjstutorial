
export const revalidate = 10; // 表示每 10 秒背景重新生成靜態頁面

export default function ISRPage() {
  const randomNumber = Math.floor(Math.random() * 10000);

  return (
    <div style={{ fontSize: '2rem', padding: '2rem' }}>
      <p>🚀 This is an ISR Page</p>
      <p>🔢 Random Number: <strong>{randomNumber}</strong></p>
      <p>🕒 Time: <strong>{new Date().toLocaleString()}</strong></p>
    </div>
  );
}
