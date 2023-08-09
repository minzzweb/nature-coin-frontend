import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

const ImageRegisterForm = () => {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0);
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleChangeItemName = useCallback((e) => {
    setItemName(e.target.value);
  }, []);
  const handleChangePrice = useCallback((e) => {
    setPrice(e.target.value);
  }, []);
  const handleChangeDescription = useCallback((e) => {
    setContent(e.target.value);
  }, []);
  const handleChangeFile = useCallback((e) => {
    console.log(e.target.files[0]);

    setFile(e.target.files[0]);
  }, []);

  return (
    <div align="center">
      <h2>사진을 등록하고 코인을 얻으세요!</h2>
      <form>
        <table>
          <tbody>
            <tr>
              <td>하위 카테고리:</td>
              <td>
                <select name="category" id="categoryId">
                  <option value="1">Transportation</option>
                  <option value="2">Cafe</option>
                  <option value="3">Bag</option>
                  <option value="4">Food</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>제목</td>
              <td>
                <input
                  type="text"
                  value={itemName}
                  onChange={handleChangeItemName}
                />
              </td>
            </tr>

            <tr>
              <td>이미지</td>
              <td>
                <input type="file" onChange={handleChangeFile} />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <textarea
                  rows="5"
                  value={content}
                  onChange={handleChangeDescription}
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <button type="submit">등록</button>
          <Link to="/">취소</Link>
        </div>
      </form>
    </div>
  );
};
export default ImageRegisterForm;
