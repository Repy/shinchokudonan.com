import { } from 'react'

export function TopPage() {

  return (
    <>
      <div className="fixed-grid has-1-cols has-2-cols-tablet">
        <div className="grid">
          <div className="cell">
            <div className="card">
              <div className="card-content">
                <h2 className="title">こんな経験ありませんか？</h2>
                <div className="content">
                  <ul>
                    <li>夏休みの宿題を最終日に残す</li>
                    <li>提出期限は深夜残業</li>
                  </ul>
                  このサービスは、期限が守れない君のためのサービスです。
                </div>
              </div>
              <div className="card-footer">
                <a className="card-footer-item">今すぐ始める</a>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="card">
              <div className="card-content">
                <h2 className="title">進捗どうなん.com とは？</h2>
                <div className="content">
                  大きな課題の進捗を少しずつこなすためのサービスです。<br />
                  毎日、親や先生や上司の代わりに進捗どうなん.comが進捗を確認・促してくれます。<br />
                  進捗が著しく悪い場合やサボりが多発している場合は、親や先生や上司の代わりに進捗どうなん.comが叱ってくれます。
                </div>
              </div>
              <div className="card-footer">
                <a className="card-footer-item">今すぐ始める</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}