import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Page3.css";

function Page3({ language }) {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: { en: "ASD123", ko: "ASD123", jp: "ASD123" },
      content: {
        en: "Cheering for Fukushima!",
        ko: "후쿠시마를 응원합니다!",
        jp: "福島を応援しています！",
      },
      likes: 21,
      dislikes: 6,
      time: { en: "20 hours ago", ko: "20시간 전", jp: "20時間前" },
    },
    {
      id: 2,
      author: { en: "KKS018", ko: "KKS018", jp: "KKS018" },
      content: {
        en: "Fukushima, love and support will never stop!",
        ko: "후쿠시마, 사랑과 응원은 멈추지 않을 거예요!",
        jp: "福島、愛と支援は止まりません！",
      },
      likes: 12,
      dislikes: 4,
      time: { en: "1 day ago", ko: "1일 전", jp: "1日前" },
    },
    {
      id: 3,
      author: { en: "ASFC", ko: "ASFC", jp: "ASFC" },
      content: {
        en: "Let's go, Fukushima! You will shine through hardships.",
        ko: "힘내요, 후쿠시마! 어려움을 이겨낼 거예요.",
        jp: "頑張れ、福島！困難を乗り越えましょう。",
      },
      likes: 8,
      dislikes: 3,
      time: { en: "1 day ago", ko: "1일 전", jp: "1日前" },
    },
    {
      id: 4,
      author: { en: "CHOPARD", ko: "CHOPARD", jp: "CHOPARD" },
      content: {
        en: "Standing with Fukushima until the day you rise again.",
        ko: "후쿠시마가 다시 일어설 때까지 함께합니다.",
        jp: "福島が再び立ち上がる日まで共にいます。",
      },
      likes: 15,
      dislikes: 2,
      time: { en: "1 day ago", ko: "1일 전", jp: "1日前" },
    },
    {
      id: 5,
      author: { en: "zak", ko: "zak", jp: "zak" },
      content: {
        en: "Stay strong, Fukushima! Cheering for your efforts.",
        ko: "힘내세요, 후쿠시마! 당신의 노력을 응원합니다.",
        jp: "頑張って、福島！努力を応援しています。",
      },
      likes: 9,
      dislikes: 1,
      time: { en: "1 day ago", ko: "1일 전", jp: "1日前" },
    },
    {
      id: 6,
      author: { en: "LILY", ko: "LILY", jp: "LILY" },
      content: {
        en: "Supporting Fukushima's recovery. Together, we can do it.",
        ko: "후쿠시마의 회복을 지원합니다. 함께라면 해낼 수 있어요.",
        jp: "福島の復興を支援します。一緒ならできます。",
      },
      likes: 10,
      dislikes: 0,
      time: { en: "2 days ago", ko: "2일 전", jp: "2日前" },
    },
    {
      id: 7,
      author: { en: "HJK", ko: "HJK", jp: "HJK" },
      content: {
        en: "Fukushima, your courage inspires us all.",
        ko: "후쿠시마, 당신의 용기가 모두에게 영감을 줍니다.",
        jp: "福島、あなたの勇気は私たち全員に感動を与えます。",
      },
      likes: 13,
      dislikes: 2,
      time: { en: "2 days ago", ko: "2일 전", jp: "2日前" },
    },
    {
      id: 8,
      author: { en: "RIKO", ko: "RIKO", jp: "RIKO" },
      content: {
        en: "Stay strong, Fukushima! Grateful for your efforts.",
        ko: "힘내세요, 후쿠시마! 당신의 노력에 감사합니다.",
        jp: "頑張って、福島！努力に感謝します。",
      },
      likes: 11,
      dislikes: 1,
      time: { en: "2 days ago", ko: "2일 전", jp: "2日前" },
    },
    {
      id: 9,
      author: { en: "DANNY", ko: "DANNY", jp: "DANNY" },
      content: {
        en: "Fukushima, we believe in you.",
        ko: "후쿠시마, 우리는 당신을 믿습니다.",
        jp: "福島、私たちはあなたを信じています。",
      },
      likes: 8,
      dislikes: 0,
      time: { en: "2 days ago", ko: "2일 전", jp: "2日前" },
    },
    {
      id: 10,
      author: { en: "SUNNY", ko: "SUNNY", jp: "SUNNY" },
      content: {
        en: "Cheering for Fukushima's bright future.",
        ko: "후쿠시마의 밝은 미래를 응원합니다.",
        jp: "福島の明るい未来を応援しています。",
      },
      likes: 14,
      dislikes: 2,
      time: { en: "3 days ago", ko: "3일 전", jp: "3日前" },
    },
    {
      id: 11,
      author: { en: "ALEX", ko: "ALEX", jp: "ALEX" },
      content: {
        en: "Everyone is standing with Fukushima!",
        ko: "모두가 후쿠시마와 함께합니다!",
        jp: "みんな福島と共にいます！",
      },
      likes: 10,
      dislikes: 1,
      time: { en: "3 days ago", ko: "3일 전", jp: "3日前" },
    },
    {
      id: 12,
      author: { en: "JUNE", ko: "JUNE", jp: "JUNE" },
      content: {
        en: "Supporting Fukushima, your strength will change the world.",
        ko: "후쿠시마를 응원합니다. 당신의 힘이 세상을 바꿀 것입니다.",
        jp: "福島を応援しています。あなたの力が世界を変えるでしょう。",
      },
      likes: 12,
      dislikes: 3,
      time: { en: "3 days ago", ko: "3일 전", jp: "3日前" },
    },
    {
      id: 13,
      author: { en: "HANNA", ko: "HANNA", jp: "HANNA" },
      content: {
        en: "Wishing for Fukushima's recovery.",
        ko: "후쿠시마의 회복을 기원합니다.",
        jp: "福島の復興を願っています。",
      },
      likes: 16,
      dislikes: 2,
      time: { en: "4 days ago", ko: "4일 전", jp: "4日前" },
    },
    {
      id: 14,
      author: { en: "LUCAS", ko: "LUCAS", jp: "LUCAS" },
      content: {
        en: "Always praying for Fukushima.",
        ko: "항상 후쿠시마를 위해 기도합니다.",
        jp: "いつも福島のために祈っています。",
      },
      likes: 9,
      dislikes: 1,
      time: { en: "4 days ago", ko: "4일 전", jp: "4日前" },
    },
    {
      id: 15,
      author: { en: "MARK", ko: "MARK", jp: "MARK" },
      content: {
        en: "Fukushima, you are not alone!",
        ko: "후쿠시마, 당신은 혼자가 아닙니다!",
        jp: "福島、あなたは一人ではありません！",
      },
      likes: 11,
      dislikes: 1,
      time: { en: "5 days ago", ko: "5일 전", jp: "5日前" },
    },
    {
      id: 16,
      author: { en: "NINA", ko: "NINA", jp: "NINA" },
      content: {
        en: "Don't lose courage, Fukushima!",
        ko: "용기를 잃지 마세요, 후쿠시마!",
        jp: "勇気を失わないで、福島！",
      },
      likes: 15,
      dislikes: 2,
      time: { en: "5 days ago", ko: "5일 전", jp: "5日前" },
    },
    {
      id: 17,
      author: { en: "SAM", ko: "SAM", jp: "SAM" },
      content: {
        en: "Looking forward to Fukushima's beautiful future.",
        ko: "후쿠시마의 아름다운 미래를 기대합니다.",
        jp: "福島の美しい未来を楽しみにしています。",
      },
      likes: 12,
      dislikes: 0,
      time: { en: "5 days ago", ko: "5일 전", jp: "5日前" },
    },
    {
      id: 18,
      author: { en: "OLIVIA", ko: "OLIVIA", jp: "OLIVIA" },
      content: {
        en: "We are with you, Fukushima.",
        ko: "우리는 당신과 함께합니다, 후쿠시마.",
        jp: "私たちはあなたと共にいます、福島。",
      },
      likes: 14,
      dislikes: 3,
      time: { en: "6 days ago", ko: "6일 전", jp: "6日前" },
    },
    {
      id: 19,
      author: { en: "TOM", ko: "TOM", jp: "TOM" },
      content: {
        en: "Stay hopeful, Fukushima! We support you.",
        ko: "희망을 잃지 마세요, 후쿠시마! 우리는 당신을 응원합니다.",
        jp: "希望を失わないで、福島！応援しています。",
      },
      likes: 10,
      dislikes: 0,
      time: { en: "6 days ago", ko: "6일 전", jp: "6日前" },
    },
    {
      id: 20,
      author: { en: "MIA", ko: "MIA", jp: "MIA" },
      content: {
        en: "Fukushima, sincerely cheering for your efforts.",
        ko: "후쿠시마, 진심으로 당신의 노력을 응원합니다.",
        jp: "福島、心から努力を応援しています。",
      },
      likes: 13,
      dislikes: 2,
      time: { en: "7 days ago", ko: "7일 전", jp: "7日前" },
    },
    {
      id: 21,
      author: { en: "JULIE", ko: "JULIE", jp: "JULIE" },
      content: {
        en: "Sharing hope for Fukushima.",
        ko: "후쿠시마를 위한 희망을 나눕니다.",
        jp: "福島への希望を分かち合います。",
      },
      likes: 12,
      dislikes: 1,
      time: { en: "7 days ago", ko: "7일 전", jp: "7日前" },
    },
    {
      id: 22,
      author: { en: "RACHEL", ko: "RACHEL", jp: "RACHEL" },
      content: {
        en: "Believing in Fukushima's recovery!",
        ko: "후쿠시마의 회복을 믿습니다!",
        jp: "福島の復興を信じています！",
      },
      likes: 14,
      dislikes: 0,
      time: { en: "7 days ago", ko: "7일 전", jp: "7日前" },
    },
    {
      id: 23,
      author: { en: "LEO", ko: "LEO", jp: "LEO" },
      content: {
        en: "Everyone is cheering for Fukushima!",
        ko: "모두가 후쿠시마를 응원하고 있어요!",
        jp: "みんなが福島を応援しています！",
      },
      likes: 9,
      dislikes: 1,
      time: { en: "8 days ago", ko: "8일 전", jp: "8日前" },
    },
    {
      id: 24,
      author: { en: "ISABEL", ko: "ISABEL", jp: "ISABEL" },
      content: {
        en: "Unity is strength, Fukushima!",
        ko: "단결은 힘입니다, 후쿠시마!",
        jp: "団結は力です、福島！",
      },
      likes: 13,
      dislikes: 3,
      time: { en: "8 days ago", ko: "8일 전", jp: "8日前" },
    },
    {
      id: 25,
      author: { en: "MATTHEW", ko: "MATTHEW", jp: "MATTHEW" },
      content: {
        en: "Fukushima, you are strong.",
        ko: "후쿠시마, 당신은 강합니다.",
        jp: "福島、あなたは強いです。",
      },
      likes: 11,
      dislikes: 0,
      time: { en: "8 days ago", ko: "8일 전", jp: "8日前" },
    },
  ]);
  

  const [newEntry, setNewEntry] = useState("");
  const [interactedComments, setInteractedComments] = useState({});

  const handleAddComment = () => {
    const splitIndex = newEntry.indexOf(":");
    if (splitIndex !== -1) {
      const nickname = newEntry.slice(0, splitIndex).trim();
      const comment = newEntry.slice(splitIndex + 1).trim();

      if (nickname && comment) {
        const newComment = {
          id: comments.length + 1,
          author: { en: nickname, ko: nickname, jp: nickname },
          content: { en: comment, ko: comment, jp: comment },
          likes: 0,
          dislikes: 0,
          time: {
            en: "just now",
            ko: "방금",
            jp: "たった今",
          },
        };
        setComments([newComment, ...comments]);
        setNewEntry("");
      } else {
        alert(
          language === "ko"
            ? "닉네임과 댓글을 올바른 형식으로 입력하세요: 닉네임: 댓글"
            : language === "jp"
            ? "ニックネームとコメントを正しい形式で入力してください: ニックネーム: コメント"
            : "Please enter your nickname and comment in the correct format: Nickname: Comment"
        );
      }
    } else {
      alert(
        language === "ko"
          ? "닉네임과 댓글을 올바른 형식으로 입력하세요: 닉네임: 댓글"
          : language === "jp"
          ? "ニックネームとコメントを正しい形式で入力してください: ニックネーム: コメント"
          : "Please enter your nickname and comment in the correct format: Nickname: Comment"
      );
    }
  };

  const handleLike = (id) => {
    if (interactedComments[id]?.liked) {
      alert(
        language === "ko"
          ? "이미 좋아요를 눌렀습니다!"
          : language === "jp"
          ? "既に「いいね！」を押しました！"
          : "You have already liked this comment!"
      );
      return;
    }

    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
    setInteractedComments((prev) => ({
      ...prev,
      [id]: { ...prev[id], liked: true },
    }));
  };

  const handleDislike = (id) => {
    if (interactedComments[id]?.disliked) {
      alert(
        language === "ko"
          ? "이미 싫어요를 눌렀습니다!"
          : language === "jp"
          ? "既に「嫌い」を押しました！"
          : "You have already disliked this comment!"
      );
      return;
    }

    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id ? { ...comment, dislikes: comment.dislikes + 1 } : comment
      )
    );
    setInteractedComments((prev) => ({
      ...prev,
      [id]: { ...prev[id], disliked: true },
    }));
  };

  return (
    <div>
      <div className="discussion-board">
        <header className="discussion-header">
          <h1>
            {language === "ko"
              ? "후쿠시마를 위한 응원 메시지를 남겨주세요!"
              : language === "jp"
              ? "福島への応援メッセージを残してください！"
              : "Leave your support messages for Fukushima!"}
          </h1>
          <p>
            {comments.length}{" "}
            {language === "ko"
              ? "댓글"
              : language === "jp"
              ? "コメント"
              : "comments"}
          </p>
        </header>
        <div className="discussion-input">
          <textarea
            placeholder={
              language === "ko"
                ? "다음 형식으로 입력하세요: 닉네임: 댓글"
                : language === "jp"
                ? "形式で入力してください: ニックネーム: コメント"
                : "Enter in the format: Nickname: Comment"
            }
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            rows={3}
          ></textarea>
          <button onClick={handleAddComment}>
            {language === "ko"
              ? "제출"
              : language === "jp"
              ? "送信"
              : "Submit"}
          </button>
        </div>
        <div className="discussion-comments">
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <div className="comment-author">{comment.author[language]}</div>
              <div className="comment-content">{comment.content[language]}</div>
              <div className="comment-footer">
                <span className="comment-time">{comment.time[language]}</span>
                <span className="comment-actions">
                  <button onClick={() => handleLike(comment.id)}>
                    👍 {comment.likes}
                  </button>
                  <button onClick={() => handleDislike(comment.id)}>
                    👎 {comment.dislikes}
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>
        <footer className="discussion-footer">
          <Link to="/page2" className="arrow-link">
            ◀
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Page3;
