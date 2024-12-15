import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Page2.css";

function Page2({ language }) {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: { en: "Tips for Rescuing Dogs", ko: "개 구조 팁", jp: "犬を救助するためのヒント" },
      content: { en: "How to rescue a dog...", ko: "개를 구조하는 방법...", jp: "犬を救助する方法..." },
      views: 30,
      likes: 10,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 2,
      title: { en: "How to Connect with Animals", ko: "동물과 소통하는 방법", jp: "動物とつながる方法" },
      content: { en: "To connect with animals...", ko: "동물과 교감하는 방법...", jp: "動物とつながる方法..." },
      views: 15,
      likes: 5,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 3,
      title: { en: "Tips for Identifying Good Pet Food", ko: "좋은 애완동물 사료 찾기 팁", jp: "良いペットフードを見つけるためのヒント" },
      content: { en: "To identify good pet food...", ko: "좋은 애완동물 사료를 구별하는 방법...", jp: "良いペットフードを識別する方法..." },
      views: 20,
      likes: 12,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 4,
      title: { en: "Caring for Lost Cats", ko: "길잃은 고양이 돌보기", jp: "迷子の猫のお世話" },
      content: { en: "To care for a lost cat, start by...", ko: "길잃은 고양이를 돌보려면 다음과 같이 시작하세요...", jp: "迷子の猫のお世話を始めるには..." },
      views: 20,
      likes: 11,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 5,
      title: { en: "Finding a Veterinary Clinic", ko: "동물병원 찾기", jp: "獣医クリニックを見つける" },
      content: { en: "To find a nearby veterinary clinic...", ko: "근처 동물병원을 찾는 방법...", jp: "近くの獣医クリニックを見つける方法..." },
      views: 18,
      likes: 9,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 6,
      title: { en: "Common Health Issues in Cats", ko: "고양이의 일반적인 건강 문제", jp: "猫の一般的な健康問題" },
      content: { en: "Watch for these symptoms...", ko: "다음 증상을 주의하세요...", jp: "これらの症状に注意してください..." },
      views: 22,
      likes: 8,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 7,
      title: { en: "Benefits of Adopting Older Pets", ko: "나이든 애완동물을 입양하는 이점", jp: "年配のペットを採用する利点" },
      content: { en: "Older pets bring unique joy...", ko: "나이든 애완동물은 독특한 기쁨을 제공합니다...", jp: "年配のペットは特別な喜びをもたらします..." },
      views: 10,
      likes: 7,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 8,
      title: { en: "Best Practices for Pet Training", ko: "애완동물 훈련을 위한 최고의 방법", jp: "ペットトレーニングのベストプラクティス" },
      content: { en: "Positive reinforcement works best...", ko: "긍정적 강화가 가장 효과적입니다...", jp: "ポジティブな強化が最も効果的です..." },
      views: 19,
      likes: 9,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 9,
      title: { en: "Understanding Pet Nutrition", ko: "애완동물 영양 이해하기", jp: "ペット栄養を理解する" },
      content: { en: "What to look for in pet food labels...", ko: "애완동물 사료 라벨에서 확인해야 할 사항...", jp: "ペットフードのラベルで探すべきこと..." },
      views: 12,
      likes: 6,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 10,
      title: { en: "How to Bathe Your Dog Safely", ko: "개를 안전하게 목욕시키는 방법", jp: "犬を安全に入浴させる方法" },
      content: { en: "Steps to make bath time easy...", ko: "목욕 시간을 쉽게 만드는 단계...", jp: "入浴時間を簡単にする手順..." },
      views: 25,
      likes: 10,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 11,
      title: { en: "Animal Therapy Benefits", ko: "동물 치료의 이점", jp: "動物療法の利点" },
      content: { en: "Why animals help reduce stress...", ko: "동물이 스트레스를 줄이는 이유...", jp: "動物がストレスを軽減する理由..." },
      views: 14,
      likes: 5,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 12,
      title: { en: "Rescue Stories: Inspiration", ko: "구조 이야기: 영감", jp: "救助の話: インスピレーション" },
      content: { en: "Heartwarming rescue tales...", ko: "감동적인 구조 이야기...", jp: "心温まる救助の話..." },
      views: 18,
      likes: 8,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 13,
      title: { en: "Training Cats vs. Dogs", ko: "고양이와 개 훈련 비교", jp: "猫と犬のトレーニングの比較" },
      content: { en: "Key differences in training...", ko: "훈련의 주요 차이점...", jp: "トレーニングの主な違い..." },
      views: 22,
      likes: 9,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 14,
      title: { en: "Protecting Pets in Emergencies", ko: "비상시 애완동물 보호", jp: "緊急時にペットを守る" },
      content: { en: "Steps to safeguard pets...", ko: "애완동물을 안전하게 지키는 단계...", jp: "ペットを保護する手順..." },
      views: 30,
      likes: 11,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 15,
      title: { en: "Finding Lost Pets", ko: "잃어버린 애완동물 찾기", jp: "迷子のペットを見つける" },
      content: { en: "What to do if your pet is lost...", ko: "애완동물을 잃어버렸을 때 해야 할 일...", jp: "ペットが迷子になった場合の対処法..." },
      views: 20,
      likes: 7,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 16,
      title: { en: "Pet Adoption Myths Busted", ko: "애완동물 입양 신화 깨기", jp: "ペット採用の神話を打破する" },
      content: { en: "Debunking common misconceptions...", ko: "일반적인 오해를 풀기...", jp: "一般的な誤解を解く..." },
      views: 17,
      likes: 6,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 17,
      title: { en: "Volunteer at Animal Shelters", ko: "동물 보호소에서 자원봉사하기", jp: "動物保護施設でボランティアをする" },
      content: { en: "How to get involved...", ko: "참여 방법...", jp: "参加する方法..." },
      views: 13,
      likes: 8,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 18,
      title: { en: "DIY Pet Toys", ko: "애완동물 장난감 DIY", jp: "ペットのおもちゃをDIY" },
      content: { en: "Craft fun toys for your pets...", ko: "애완동물을 위한 재미있는 장난감 제작...", jp: "ペットのための楽しいおもちゃを作る..." },
      views: 11,
      likes: 4,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 19,
      title: { en: "The Importance of Microchipping", ko: "마이크로칩의 중요성", jp: "マイクロチップの重要性" },
      content: { en: "Why you should microchip pets...", ko: "애완동물에 마이크로칩을 삽입해야 하는 이유...", jp: "ペットにマイクロチップを入れるべき理由..." },
      views: 15,
      likes: 5,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 20,
      title: { en: "Pet Vaccination Guide", ko: "애완동물 예방접종 가이드", jp: "ペットの予防接種ガイド" },
      content: { en: "When and why to vaccinate...", ko: "언제 그리고 왜 예방접종을 해야 하는지...", jp: "いつ、なぜ予防接種が必要なのか..." },
      views: 20,
      likes: 9,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 21,
      title: { en: "Introducing Pets to New Environments", ko: "애완동물을 새 환경에 적응시키기", jp: "ペットを新しい環境に適応させる" },
      content: { en: "Tips for a smooth transition...", ko: "원활한 전환을 위한 팁...", jp: "スムーズな移行のためのヒント..." },
      views: 12,
      likes: 4,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 22,
      title: { en: "Understanding Animal Behavior", ko: "동물 행동 이해하기", jp: "動物の行動を理解する" },
      content: { en: "Why pets behave the way they do...", ko: "애완동물이 그러한 행동을 하는 이유...", jp: "ペットがそのように行動する理由..." },
      views: 21,
      likes: 8,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 23,
      title: { en: "Seasonal Care for Pets", ko: "애완동물을 위한 계절별 관리", jp: "ペットの季節的なケア" },
      content: { en: "Prepare for weather changes...", ko: "날씨 변화에 대비하기...", jp: "天候の変化に備える..." },
      views: 14,
      likes: 6,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 24,
      title: { en: "Fostering Pets: A Beginner's Guide", ko: "애완동물 임시보호 초보자 가이드", jp: "ペットを預かる: 初心者ガイド" },
      content: { en: "What to expect when fostering...", ko: "임시보호 중 기대할 점...", jp: "預かり中に期待されること..." },
      views: 18,
      likes: 7,
      date: "2024-11-21",
      comments: [],
    },
    {
      id: 25,
      title: { en: "Top Pet-Friendly Travel Destinations", ko: "애완동물 친화적인 여행지", jp: "ペットフレンドリーな旅行先" },
      content: { en: "Where to go with your furry friends...", ko: "애완동물과 함께 갈 여행지...", jp: "ペットと一緒に行く場所..." },
      views: 19,
      likes: 9,
      date: "2024-11-21",
      comments: [],
    },
  ]);
  

  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [interactedPosts, setInteractedPosts] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [newComment, setNewComment] = useState("");

  const postsPerPage = 10;

  useEffect(() => {
    const today = new Date().toLocaleDateString("en-CA");
    setPosts((prevPosts) =>
      prevPosts.map((post) => ({
        ...post,
        date: today,
      }))
    );
  }, []);

  const handleWriteClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = () => {
    if (newTitle.trim() && newContent.trim()) {
      const today = new Date().toLocaleDateString("en-CA");
      setPosts([
        ...posts,
        {
          id: posts.length + 1,
          title: { en: newTitle, ko: newTitle, jp: newTitle },
          content: { en: newContent, ko: newContent, jp: newContent },
          views: 0,
          likes: 0,
          date: today,
          comments: [],
        },
      ]);
      setNewTitle("");
      setNewContent("");
      setShowForm(false);
    }
  };

  const handlePostClick = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, views: post.views + 1 } : post
      )
    );
    const clickedPost = posts.find((post) => post.id === postId);
    if (clickedPost) {
      setSelectedPost({ ...clickedPost });
    }
  };

  const handleLikeClick = (postId) => {
    if (interactedPosts[postId]) {
      alert(
        language === "ko"
          ? "게시글에 좋아요는 한 번만 가능합니다!"
          : language === "jp"
          ? "投稿に「いいね！」は一度だけ可能です！"
          : "You can like a post only once!"
      );
      return;
    }
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
    setInteractedPosts((prev) => ({ ...prev, [postId]: true }));
  };

  const handleAddComment = () => {
    if (newComment.trim() && selectedPost) {
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === selectedPost.id
            ? {
                ...post,
                comments: [
                  ...post.comments,
                  { id: post.comments.length + 1, content: newComment },
                ],
              }
            : post
        )
      );

      setSelectedPost((prevSelectedPost) =>
        prevSelectedPost
          ? {
              ...prevSelectedPost,
              comments: [
                ...prevSelectedPost.comments,
                { id: prevSelectedPost.comments.length + 1, content: newComment },
              ],
            }
          : null
      );
      setNewComment("");
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const translations = {
    writePost: {
      en: "Write Post",
      ko: "게시글 작성",
      jp: "投稿を書く",
    },
    commentsHeader: {
      en: "Comments",
      ko: "댓글",
      jp: "コメント",
    },
    noComments: {
      en: "No comments yet",
      ko: "아직 댓글이 없습니다",
      jp: "まだコメントがありません",
    },
    addCommentPlaceholder: {
      en: "Add a comment...",
      ko: "댓글 추가...",
      jp: "コメントを追加...",
    },
    addCommentButton: {
      en: "Add Comment",
      ko: "댓글 추가",
      jp: "コメントを追加",
    },
    closeButton: {
      en: "Close",
      ko: "닫기",
      jp: "閉じる",
    },
  };

  return (
    <div className="page-container">
      <button className="arrow-left" onClick={() => navigate("/")}>
        ◀
      </button>
      <div className="page2-content">
        <table className="info-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Views</th>
              <th>Likes</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td className="post-title" onClick={() => handlePostClick(post.id)}>
                  {post.title[language]}
                </td>
                <td className="views">{post.views}</td>
                <td className="likes">
                  <span onClick={() => handleLikeClick(post.id)} style={{ cursor: "pointer" }}>
                    👍 {post.likes}
                  </span>
                </td>
                <td>{post.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="write-button" onClick={handleWriteClick}>
          {translations.writePost[language]}
        </button>
      </div>

         {/* 오른쪽 이동 버튼 */}
    <button className="arrow-right" onClick={() => navigate("/page3")}>
      ▶
    </button>


      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>{translations.writePost[language]}</h2>
            <input
              type="text"
              placeholder={translations.addCommentPlaceholder[language]}
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="modal-input"
            />
            <textarea
              placeholder={translations.addCommentPlaceholder[language]}
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className="modal-textarea"
            ></textarea>
            <button className="modal-submit" onClick={handleFormSubmit}>
              {translations.addCommentButton[language]}
            </button>
            <button className="modal-close" onClick={() => setShowForm(false)}>
              {translations.closeButton[language]}
            </button>
          </div>
        </div>
      )}

      {selectedPost && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedPost.title[language]}</h2>
            <p>{selectedPost.content[language]}</p>
            <h3>{translations.commentsHeader[language]}</h3>
            {selectedPost.comments && selectedPost.comments.length > 0 ? (
              <ul>
                {selectedPost.comments.map((comment) => (
                  <li key={comment.id}>{comment.content}</li>
                ))}
              </ul>
            ) : (
              <p>{translations.noComments[language]}</p>
            )}
            <textarea
              placeholder={translations.addCommentPlaceholder[language]}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <div className="modal-buttons">
              <button className="modal-close" onClick={handleAddComment}>
                {translations.addCommentButton[language]}
              </button>
              <span style={{ width: "10px" }}></span>
              <button className="modal-close" onClick={() => setSelectedPost(null)}>
                {translations.closeButton[language]}
              </button>
            </div>
          </div>
        </div>
      )}

      <button className="info-circle" onClick={() => setShowInfoModal(true)}>
        ?
      </button>

      {showInfoModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>
              {language === "ko"
                ? "후쿠시마 동물에 대한 팁 공유 게시판"
                : language === "jp"
                ? "福島の動物についてのヒント共有掲示板"
                : "Bulletin board for sharing tips about Fukushima animals"}
            </h3>
            <button className="modal-close" onClick={() => setShowInfoModal(false)}>
              {translations.closeButton[language]}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page2;