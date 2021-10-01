import "./History.scss";

const title = "Ты помог ответить на 20 вопросов",
  notice = "Уведомления",
  subtitle = "История";

export const History = (props) => {
  return (
    <main className="history">
      <div className="container">
        <div className="flex">
          <h1>{title}</h1>
          <a href="#">{notice}</a>
        </div>
        <div className="flex">
          <h2>{subtitle}</h2>
          <select>
            <option value="1">1</option>
          </select>
        </div>
        <div className="table"></div>
      </div>
    </main>
  );
};
