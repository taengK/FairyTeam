import React, { useState } from 'react';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [condition, setCondition] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 게시물 등록 로직 구현
    // 상태 값(title, image, price, category, location, condition, description)을 사용하여 서버로 전송하거나 필요한 동작 수행
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">제목</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="image">사진</label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <label htmlFor="price">가격</label>
      <input
        type="text"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <label htmlFor="category">카테고리</label>
      <input
        type="text"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <label htmlFor="location">거래지역</label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <label htmlFor="condition">상태</label>
      <input
        type="text"
        id="condition"
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
      />

      <label htmlFor="description">상세설명</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">등록</button>
    </form>
  );
};

export default PostForm;
