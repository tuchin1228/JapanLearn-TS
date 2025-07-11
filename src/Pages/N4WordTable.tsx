import WordData from "../Jsonfiles/N4Word.json";
import { useNavigate } from "react-router-dom";

export default function NewWordTable() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="overflow-x-auto ">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <a onClick={() => navigate("/")}>首頁</a>
            </li>
            <li>
              <a onClick={() => navigate("/N4Word")}>N4單字測試</a>
            </li>
            <li>N4單字列表</li>
          </ul>
        </div>
        <div role="alert" className="alert my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>共 {WordData.length} 個單字</span>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-2xl font-bold bg-base-200">
              <th>漢字</th>
              <th>假名</th>
              <th>中文</th>
            </tr>
          </thead>
          <tbody>
            {WordData
              ? WordData.map((word, idx) => (
                  <tr className={`${idx % 2 != 0 ? "bg-base-200" : ""}`}>
                    <td className="text-xl font-semibold">
                      {word.word ? word.word : ""}
                    </td>
                    <td className="text-xl font-semibold">{word.kana}</td>
                    <td className="text-xl font-semibold">{word.chi}</td>
                  </tr>
                ))
              : null}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
