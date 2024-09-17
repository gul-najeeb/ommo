import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import Card from "../../../components/Card";
import jQuery from "jquery";

//dragula
import dragula from "../../../../node_modules/dragula/dist/dragula.min";

//TodoBoardCard
import TodoBoardCard from "../../../components/TodoBoardCard";
import TodoListCard from "../../../components/TodoListCard";

const $ = jQuery;

const Todo = () => {
  //state
  const [tab, SetTab] = useState(true);
  useEffect(() => {
    const board = $(".draggable-item");
    const selector = [];
    if (board.length > 0) {
      for (var i = 0; i < board.length; i++) {
        selector.push(document.querySelector("#draggable-item-" + i));
        selector.push(document.querySelector("#list-draggable-item-" + i));
      }
    }
    dragula(selector).on("drop", function (el) {
      $(el).addClass(" animate__animated animate__rubberBand");
      setTimeout(function () {
        $(el).removeClass(" animate__animated animate__rubberBand");
      }, 1000);
    });
  });
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header className="border-bottom-0">
                <Card.Header.Title>
                  <h4 className="card-title">Todo</h4>
                </Card.Header.Title>
                <Card.Header.Action>
                  <ButtonGroup
                    className="btn-group btn-group-sm"
                    role="group"
                    aria-label="Basic example"
                  >
                    <Button
                      type="button"
                      variant={`outline-primary ${
                        tab === true ? "active" : ""
                      }`}
                      onClick={() => SetTab(true)}
                      data-toggle-extra="tab"
                      data-target-extra="#board-content"
                    >
                      Board
                    </Button>
                    <Button
                      type="button"
                      variant={`outline-primary ${
                        tab === false ? "active" : ""
                      } `}
                      onClick={() => SetTab(false)}
                      data-toggle-extra="tab"
                      data-target-extra="#list-content"
                    >
                      List
                    </Button>
                  </ButtonGroup>
                </Card.Header.Action>
              </Card.Header>
            </Card>
          </Col>
          <Col md="12">
            <div
              id="board-content"
              className={`animate__animated animate__fadeIn ${
                tab === true ? "active" : ""
              }`}
              data-toggle-extra="tab-content"
            >
              <div className="board-content">
                <div className="board-item">
                  <Card>
                    <Card.Body>
                      <h5 className="item-title">Todo</h5>
                    </Card.Body>
                  </Card>
                  <div className="board-scrollbar board-scrollbar-0">
                    <TodoBoardCard
                      id="1"
                      className="border-color-left-blue"
                      title="Launch SpaceX"
                    />

                    <div>
                      <TodoBoardCard
                        id="2"
                        className="border-color-left-red"
                        title="New Updates"
                      />
                    </div>

                    <div>
                      <TodoBoardCard
                        id="3"
                        className="border-color-left-yellow"
                        title="Night mode"
                      />
                    </div>

                    <div>
                      <TodoBoardCard
                        id="4"
                        className="border-color-left-green"
                        title="Use-cases"
                      />
                    </div>
                  </div>
                </div>
                <div className="board-item">
                  <Card>
                    <Card.Body>
                      <h5 className="item-title">In Progress</h5>
                    </Card.Body>
                  </Card>
                  <div className="board-scrollbar board-scrollbar-1">
                    <div>
                      <TodoBoardCard id="7" title="New Updates" />
                    </div>

                    <div>
                      <TodoBoardCard
                        id="6"
                        className="border-color-left-yellow"
                        title="Launch SpaceX"
                      />
                    </div>

                    <div>
                      <TodoBoardCard
                        id="9"
                        className="border-color-left-red"
                        title="Use-cases"
                      />
                    </div>

                    <div>
                      <TodoBoardCard
                        id="8"
                        className="border-color-left-blue"
                        title="Night mode"
                      />
                    </div>
                  </div>
                </div>
                <div className="board-item">
                  <Card>
                    <Card.Body>
                      <h5 className="item-title">Review</h5>
                    </Card.Body>
                  </Card>
                  <div className="board-scrollbar board-scrollbar-2">
                    <div>
                      <TodoBoardCard
                        id="13"
                        className="border-color-left-red"
                        title="Night mode"
                      />
                    </div>

                    <div>
                      <TodoBoardCard
                        id="11"
                        className="border-color-left-blue"
                        title="Launch SpaceX"
                      />
                    </div>

                    <div>
                      <TodoBoardCard
                        id="14"
                        className="border-color-left-green"
                        title="Use-cases"
                      />
                    </div>

                    <div>
                      <TodoBoardCard
                        id="12"
                        className="border-color-left-red"
                        title="New Updates"
                      />
                    </div>
                  </div>
                </div>
                <div className="board-item">
                  <Card>
                    <Card.Body>
                      <h5 className="item-title">Complete</h5>
                    </Card.Body>
                  </Card>
                  <div className="board-scrollbar board-scrollbar-3">
                    <div>
                      <TodoBoardCard id="19" title="Use-cases" />
                    </div>

                    <div>
                      <TodoBoardCard
                        id="17"
                        className="border-color-left-red"
                        title="New Updates"
                      />
                    </div>

                    <div>
                      <TodoBoardCard id="18" title="Night mode" />
                    </div>

                    <div>
                      <TodoBoardCard id="16" title="Launch SpaceX" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="list-content"
              className={`animate__animated animate__fadeIn ${
                tab === false ? "active" : ""
              }`}
              data-toggle-extra="tab-content"
            >
              <div className="list-content">
                <div className="list-item">
                  <Card>
                    <Card.Body>
                      <h5 className="item-title">Todo</h5>
                    </Card.Body>
                  </Card>

                  <div>
                    <TodoListCard
                      id="1"
                      className="border-color-left-blue"
                      title="Launch SpaceX"
                    />
                  </div>

                  <div>
                    <TodoListCard
                      id="2"
                      className="border-color-left-red"
                      title="New Updates"
                    />
                  </div>

                  <div>
                    <TodoListCard
                      id="3"
                      className="border-color-left-yellow"
                      title="Night mode"
                    />
                  </div>

                  <div>
                    <TodoListCard
                      id="4"
                      className="border-color-left-green"
                      title="Use-cases"
                    />
                  </div>
                </div>
                <div className="list-item">
                  <Card>
                    <Card.Body>
                      <h5 className="item-title">In Progress</h5>
                    </Card.Body>
                  </Card>

                  <div>
                    <TodoListCard
                      id="6"
                      className="border-color-left-blue"
                      title="Launch SpaceX"
                    />
                  </div>

                  <div>
                    <TodoListCard
                      id="7"
                      className="border-color-left-red"
                      title="Launch SpaceX"
                    />
                  </div>

                  <div>
                    <TodoListCard
                      id="8"
                      className="border-color-left-yellow"
                      title="Night mode"
                    />
                  </div>

                  <div>
                    <TodoListCard
                      id="9"
                      className="border-color-left-green"
                      title="Use-cases"
                    />
                  </div>
                </div>
                <div className="list-item">
                  <Card>
                    <Card.Body>
                      <h5 className="item-title">Review</h5>
                    </Card.Body>
                  </Card>

                  <div>
                    <TodoListCard
                      id="11"
                      className="border-color-left-blue"
                      title="Launch SpaceX"
                    />
                  </div>

                  <div>
                    <TodoListCard
                      id="12"
                      className="border-color-left-red"
                      title="New Updates"
                    />
                  </div>

                  <div>
                    <TodoListCard
                      id="13"
                      className="border-color-left-yellow"
                      title="Night mode"
                    />
                  </div>

                  <div>
                    <TodoListCard
                      id="14"
                      className="border-color-left-green"
                      title="Use-cases"
                    />
                  </div>
                </div>
                <div className="list-item">
                  <Card>
                    <Card.Body>
                      <h5 className="item-title">Complete</h5>
                    </Card.Body>
                  </Card>

                  <div>
                    <TodoListCard
                      id="16"
                      className="border-color-left-blue"
                      title="Launch SpaceX"
                    />
                  </div>

                  <div>
                    <TodoListCard
                      id="17"
                      className="border-color-left-red"
                      title="New Updates"
                    />
                  </div>

                  <div>
                    <TodoListCard
                      id="18"
                      className="border-color-left-yellow"
                      title="Night mode"
                    />
                  </div>

                  <div>
                    <TodoListCard
                      id="19"
                      className="border-color-left-green"
                      title="Use-cases"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Todo;
