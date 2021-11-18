import './App.css';

function App() {
  return (
    <body>
      <div className="name-command">Котики-невротики</div>
      <nav>
        <ul className="menu">
          <li className="title-presentation">Title</li>
          <li>Сохранить</li>
          <li>Редактировать</li>
          <li>Экспортировать</li>
          <li>Вставить</li>
        </ul>
      </nav>
      <div className="container">
        <ul className="slides">
          <li>1 slide</li>
          <li>2 slide</li>
          <li>3 slide</li>
          <li>4 slide</li>
        </ul>
        <div className="workspace">
          <span>workspace</span>
        </div>
      </div>
    </body>
  );
}

export default App;
