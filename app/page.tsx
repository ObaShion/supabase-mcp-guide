"use client";

import { useState } from "react";

const mcpUrl =
  "https://mcp.supabase.com/mcp?project_ref=あなたのProject Reference&read_only=true&features=database,docs";

export default function Home() {
  const [copied, setCopied] = useState(false);

  async function copyUrl() {
    try {
      await navigator.clipboard.writeText(mcpUrl);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = mcpUrl;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top">Codex × Supabase</a>
        <a className="top-cta" href="#step-01">チュートリアルを始める</a>
      </header>

      <article>
        <section className="intro" id="top">
          <p className="kicker">TUTORIAL</p>
          <h1>CodexでSupabase MCPを使おう！</h1>
          <p className="summary">Supabaseの登録から、Codexとの接続確認までを順番に進めるチュートリアルだよ。所要時間は15〜20分くらい！</p>
          <div className="meta"><span>準備するもの</span><b>ChatGPTアカウント</b><i>・</i><b>Codexアプリ</b></div>
        </section>

        <section className="lesson" id="step-01">
          <div className="lesson-number">01</div>
          <div className="lesson-body">
            <p className="kicker">SUPABASEに登録</p>
            <h2>ChatGPTでSupabaseに<br />サインインしよう！</h2>
            <p>まず <a href="https://supabase.com/dashboard" target="_blank" rel="noreferrer">Supabase Dashboard</a> を開くよ。ログイン画面にある <b>Continue with ChatGPT</b> を選ぼう！</p>
            <ol>
              <li><b>Continue with ChatGPT</b> をクリックする</li>
              <li>ChatGPT側の画面で内容を確認して、許可する</li>
              <li>初めてなら、Supabaseのアカウントが自動で作られるよ</li>
            </ol>
            <aside className="note"><b>ここがポイント</b><br />ChatGPTと同じメールアドレスでSupabaseを使っていた場合は、その既存アカウントにサインインできるよ！</aside>
          </div>
        </section>

        <section className="lesson" id="step-02">
          <div className="lesson-number">02</div>
          <div className="lesson-body">
            <p className="kicker">プロジェクトを作成</p>
            <h2>練習用のプロジェクトを<br />1つ作ろう！</h2>
            <p>ログインできたら、画面の <b>New project</b> を押そう。初めてなら組織名を決める画面が出るので、好きな名前を入力すればOKだよ。</p>
            <figure className="screen-card wide">
              <img src="https://bryntum.com/wp-content/uploads/2024/10/supabase_create_project-1-2048x644.png" alt="Supabase DashboardのNew projectボタンがある画面例。" />
              <figcaption><b>New project</b> をクリックして始めよう！ <a href="https://bryntum.com/blog/how-to-use-supabase-with-react/" target="_blank" rel="noreferrer">画像の出典 ↗</a></figcaption>
            </figure>
            <ol>
              <li>プロジェクト名を入力する（例：<code>codex-practice</code>）</li>
              <li>データベースのパスワードを決める</li>
              <li>リージョンは日本に近い場所を選び、<b>Create new project</b> を押す</li>
            </ol>
            <aside className="note"><b>ちょっと待とう</b><br />プロジェクトの準備には数分かかるよ。Dashboardが開けたら次に進もう！</aside>
          </div>
        </section>

        <section className="lesson" id="step-03">
          <div className="lesson-number">03</div>
          <div className="lesson-body">
            <p className="kicker">REFERENCE ID</p>
            <h2>Project Referenceを<br />コピーしよう！</h2>
            <p>Supabaseの左メニューで <b>Project Settings</b> → <b>General</b> を開くよ。<b>Reference ID</b> をコピーしよう。これはプロジェクトの“住所”みたいな文字列だよ！</p>
            <figure className="screen-card wide">
              <img src="https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/integrations/readyset/screenshot-0.png?t=2024-07-19T14%3A31%3A22.455Z" alt="SupabaseのProject Settings画面。Reference IDが表示されている例。" />
              <figcaption>ここにある <b>Reference ID</b> をコピー！ <a href="https://supabase.com/partners/integrations/readyset" target="_blank" rel="noreferrer">画像の出典 ↗</a></figcaption>
            </figure>
          </div>
        </section>

        <section className="lesson" id="step-04">
          <div className="lesson-number">04</div>
          <div className="lesson-body">
            <p className="kicker">CODEXで設定</p>
            <h2>CodexにSupabase MCPを<br />追加しよう！</h2>
            <p>Codexアプリで <b>Settings</b> → <b>MCP servers</b> → <b>+ Add server</b> をクリックしよう！</p>
            <figure className="screen-card wide">
              <img src="https://matagi.ai/desktop-install/codex_2.png" alt="CodexアプリのMCP servers画面の例。" />
              <figcaption><b>MCP servers</b> を開いて <b>+ Add server</b>！ <a href="https://matagi.ai/blog/guides/how-to-add-mcp-servers-to-codex" target="_blank" rel="noreferrer">画像の出典 ↗</a></figcaption>
            </figure>
            <div className="fields">
              <p><span>名前</span><code>Supabase</code></p>
              <p><span>接続方法</span><code>Streamable HTTP</code></p>
              <p><span>URL</span><code>https://mcp.supabase.com/mcp?project_ref=あなたのReference ID&amp;read_only=true&amp;features=database,docs</code></p>
            </div>
            <div className="copy-box">
              <b>コピペ用URL</b>
              <p>「あなたのProject Reference」の部分だけを、STEP 03でコピーした文字に置きかえてね！</p>
              <code>{mcpUrl}</code>
              <button onClick={copyUrl}>{copied ? "コピーできたよ！" : "URLをコピー"}</button>
            </div>
          </div>
        </section>

        <section className="lesson" id="step-05">
          <div className="lesson-number">05</div>
          <div className="lesson-body">
            <p className="kicker">接続を許可</p>
            <h2>Supabaseへの接続を<br />許可しよう！</h2>
            <p><b>Save</b> を押すと、Supabaseへのログイン画面が開くよ。さっきChatGPTでサインインしたSupabaseアカウントを選んで、アクセスを許可しよう。</p>
          </div>
        </section>

        <section className="lesson final" id="step-06">
          <div className="lesson-number">06</div>
          <div className="lesson-body">
            <p className="kicker">接続テスト</p>
            <h2>テーブル名を聞いて、<br />接続を確かめよう！</h2>
            <p>Codexのチャットで、下の文を送ってみよう。MCPツールの実行確認が出たら、内容を読んでから許可してね！</p>
            <blockquote>「Supabase MCPを使って、このプロジェクトのテーブル名だけを教えて！」</blockquote>
            <p>テーブル名が返ってきたら接続成功！ これでCodexからSupabase MCPを使えるようになったよ 🎉</p>
          </div>
        </section>
      </article>

    </main>
  );
}
