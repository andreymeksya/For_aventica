import React from "react";
import "./style.css";

class Play extends React.Component {
  state = {
    loses: 0,
    wins: 0,
    counter: 1,
    step: 1,
    map: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    y: -1,
    x: -1,
    firstMove: 0
  };
  componentDidMount() {
    let canvas = document.getElementById("ttt"),
      ctx = canvas.getContext("2d"),
      msg = document.getElementById("message"),
      cellSize = 100,
      BLANK = 0,
      X = 1,
      O = -1;

    canvas.width = canvas.height = 3 * cellSize;
    var _this = this;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBoard();
      fillBoard();

      function drawBoard() {
        ctx.strokeStyle = "black";
        ctx.lineWidth = 10;

        ctx.beginPath();
        ctx.moveTo(cellSize, 0);
        ctx.lineTo(cellSize, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cellSize * 2, 0);
        ctx.lineTo(cellSize * 2, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, cellSize);
        ctx.lineTo(canvas.width, cellSize);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, cellSize * 2);
        ctx.lineTo(canvas.width, cellSize * 2);
        ctx.stroke();
      }

      function fillBoard() {
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        for (let i = 0; i < _this.state.map.length; i++) {
          let coords = getCellCoords(i);

          ctx.save();
          ctx.translate(coords.x + cellSize / 2, coords.y + cellSize / 2);
          if (_this.state.map[i] == X) {
            drawX();
          } else if (_this.state.map[i] == O) {
            drawO();
          }
          ctx.restore();
        }
      }

      function drawX() {
        ctx.beginPath();
        ctx.moveTo(-cellSize / 3, -cellSize / 3);
        ctx.lineTo(cellSize / 3, cellSize / 3);
        ctx.moveTo(cellSize / 3, -cellSize / 3);
        ctx.lineTo(-cellSize / 3, cellSize / 3);
        ctx.stroke();
      }

      function drawO() {
        ctx.beginPath();
        ctx.arc(0, 0, cellSize / 3, 0, Math.PI * 2);
        ctx.stroke();
      }

      requestAnimationFrame(draw);
    }

    function getCellCoords(cell) {
      let x = (cell % 3) * cellSize,
        y = Math.floor(cell / 3) * cellSize;

      return {
        x: x,
        y: y
      };
    }

    draw();
  }

  handleClick() {
    let y = this.state.y;
    let x = this.state.x;
    let mapCopy = this.state.map;
    let name = this.props.name;

    if (1 < y && y < 100 && 1 < x && x < 100) {
      if (mapCopy[0] === 0) {
        mapCopy[0] = 1;
        this.setState({ map: mapCopy });
        this.setState({ step: this.state.step + 1 });
      } else {
        alert(name + ": Место занято");
      }
    }

    if (1 < y && y < 100 && 100 < x && x < 200) {
      if (mapCopy[1] === 0) {
        mapCopy[1] = 1;
        this.setState({ map: mapCopy });
        this.setState({ step: this.state.step + 1 });
      } else {
        alert(name + ": Место занято");
      }
    }

    if (1 < y && y < 100 && 200 < x && x < 300) {
      if (mapCopy[2] === 0) {
        mapCopy[2] = 1;
        this.setState({ map: mapCopy });
        this.setState({ step: this.state.step + 1 });
      } else {
        alert(name + ": Место занято");
      }
    }

    if (100 < y && y < 200 && 1 < x && x < 100) {
      if (mapCopy[3] === 0) {
        mapCopy[3] = 1;
        this.setState({ map: mapCopy });
        this.setState({ step: this.state.step + 1 });
      } else {
        alert(name + ": Место занято");
      }
    }

    if (100 < y && y < 200 && 100 < x && x < 200) {
      if (mapCopy[4] === 0) {
        mapCopy[4] = 1;
        this.setState({ map: mapCopy });
        this.setState({ step: this.state.step + 1 });
      } else {
        alert(name + ": Место занято");
      }
    }

    if (100 < y && y < 200 && 200 < x && x < 300) {
      if (mapCopy[5] === 0) {
        mapCopy[5] = 1;
        this.setState({ map: mapCopy });
        this.setState({ step: this.state.step + 1 });
      } else {
        alert(name + ": Место занято");
      }
    }

    if (200 < y && y < 300 && 1 < x && x < 100) {
      if (mapCopy[6] === 0) {
        mapCopy[6] = 1;
        this.setState({ map: mapCopy });
        this.setState({ step: this.state.step + 1 });
      } else {
        alert(name + ": Место занято");
      }
    }

    if (200 < y && y < 300 && 100 < x && x < 200) {
      if (mapCopy[7] === 0) {
        mapCopy[7] = 1;
        this.setState({ map: mapCopy });
        this.setState({ step: this.state.step + 1 });
      } else {
        alert(name + ": Место занято");
      }
    }

    if (200 < y && y < 300 && 200 < x && x < 300) {
      if (mapCopy[8] === 0) {
        mapCopy[8] = 1;
        this.setState({ map: mapCopy });
        this.setState({ step: this.state.step + 1 });
      } else {
        alert(name + ": Место занято");
      }
    }
  }

  _onMouseMove(e) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }

  render() {
    const map = this.state.map;
    const _this = this;

    if ((_this.state.step % 2 === 1 && _this.state.firstMove == 1) || (_this.state.step % 2 === 0 && _this.state.firstMove === 0)) {
      let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
      ];

      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      if (_this.state.step < 3) {
        let newMap = map;
        while (true) {
          let index = getRandomInt(0, 8);
          if (newMap[index] === 0) {
            newMap[index] = -1;
            _this.setState({ map: newMap });
            _this.setState({ step: _this.state.step + 1 });
            break;
          } else {
            continue;
          }
        }
      }
      if (_this.state.step >= 3) {
        let isWin = false;
        for (let i = 0; i < 8; i++) {
          let newMap = map;
          if (
            newMap[wins[i][0]] === 1 &&
            newMap[wins[i][1]] === 1 &&
            newMap[wins[i][2]] === 0
          ) {
            newMap[wins[i][2]] = -1;
            _this.setState({ map: newMap });
            _this.setState({ step: this.state.step + 1 });
            isWin = true;
            break;
          } else if (
            newMap[wins[i][0]] === 0 &&
            newMap[wins[i][1]] === 1 &&
            newMap[wins[i][2]] === 1
          ) {
            newMap[wins[i][0]] = -1;
            _this.setState({ map: newMap });
            _this.setState({ step: this.state.step + 1 });
            isWin = true;
            break;
          } else if (
            newMap[wins[i][0]] === 1 &&
            newMap[wins[i][1]] === 0 &&
            newMap[wins[i][2]] === 1
          ) {
            newMap[wins[i][1]] = -1;
            _this.setState({ map: newMap });
            _this.setState({ step: this.state.step + 1 });
            isWin = true;
            break;
          }
        }
        if (isWin === false) {
          let newMap = map;
          for (let i = 0; i < 9; i++) {
            let index = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
            if (newMap[index] === 0) {
              newMap[index] = -1;
              _this.setState({ map: newMap });
              _this.setState({ step: _this.state.step + 1 });
              break;
            } else {
              continue;
            }
          }
        }
      }
    }
   
    if (
      (map[0] === 1 && map[1] === 1 && map[2] === 1) ||
      (map[3] === 1 && map[4] === 1 && map[5] === 1) ||
      (map[6] === 1 && map[7] === 1 && map[8] === 1) ||
      (map[0] === 1 && map[3] === 1 && map[6] === 1) ||
      (map[1] === 1 && map[4] === 1 && map[7] === 1) ||
      (map[2] === 1 && map[5] === 1 && map[8] === 1) ||
      (map[0] === 1 && map[4] === 1 && map[8] === 1) ||
      (map[2] === 1 && map[4] === 1 && map[6] === 1)
    ) {
      document.getElementById("divResult").innerHTML = "You Wins";
      _this.setState({ map: [0, 0, 0, 0, 0, 0, 0, 0, 0] });
      _this.setState({ counter: this.state.counter + 1 });
      _this.setState({ wins: this.state.wins + 1 });
      this.setState({ step: 1 });
    } else if (
      (map[0] === -1 && map[1] === -1 && map[2] === -1) ||
      (map[3] === -1 && map[4] === -1 && map[5] === -1) ||
      (map[6] === -1 && map[7] === -1 && map[8] === -1) ||
      (map[0] === -1 && map[3] === -1 && map[6] === -1) ||
      (map[1] === -1 && map[4] === -1 && map[7] === -1) ||
      (map[2] === -1 && map[5] === -1 && map[8] === -1) ||
      (map[0] === -1 && map[4] === -1 && map[8] === -1) ||
      (map[2] === -1 && map[4] === -1 && map[6] === -1)
    ) {
      document.getElementById("divResult").innerHTML = "Computer wins";
      _this.setState({ map: [0, 0, 0, 0, 0, 0, 0, 0, 0] });
      _this.setState({ counter: this.state.counter + 1 });
      _this.setState({ loses: this.state.loses + 1 });
      _this.setState({ step: 1 });
    } else if (map.includes(0) === false) {
      document.getElementById("divResult").innerHTML = "Ничья";
      _this.setState({ map: [0, 0, 0, 0, 0, 0, 0, 0, 0] });
      _this.setState({ counter: this.state.counter + 1 });
      _this.setState({ step: 1 });
    }

    function userMove(){
      _this.setState({ map: [0, 0, 0, 0, 0, 0, 0, 0, 0] });
      _this.setState({ step: 1 });
      _this.setState({ firstMove: 0 });
    }
    function computerMove(){
      _this.setState({ map: [0, 0, 0, 0, 0, 0, 0, 0, 0] });
      _this.setState({ step: 1 });
      _this.setState({ firstMove: 1 });
    }

    return (
      <div>
          <div className="headLine">Игра "Крестики-нолики" с компьютером</div>
          <div className="sectionName"><div>Имя:&nbsp; </div><div>{this.props.name}</div></div>
          <div className="sectionName"><div>Игра:&nbsp; </div><div>{this.state.counter}</div></div>
          <div className="sectionName"><div>Счет:&nbsp; </div><div>{this.state.wins}:{this.state.loses}</div></div>
          <div className="sectionName"><div>Результат:&nbsp; </div><div id="divResult"></div></div>
          <div className="headLine"> Выберете кто будет ходить первым:</div>
          <div className="sectionChoose">
            <button className="buttonChoose" id="Im" onClick={userMove}>Вы</button>
            <button className="buttonChoose" id="Comp" onClick={computerMove}>Компьютер</button>
          </div>  
          {(this.state.firstMove === 0) ? <div className="startChoose">Вы начинаете первым</div> : <div className="startChoose">Компьютер начинает первым</div>}
          <div className="sectionCanvas"><canvas onMouseMove={this._onMouseMove.bind(this)} onClick={this.handleClick.bind(this)} id="ttt"></canvas></div>
      </div>
    );
  }
}

export default Play;
