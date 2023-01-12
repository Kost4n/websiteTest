import React, {Component} from 'react';
import {Button, Card, CardGroup, Container} from "react-bootstrap";

function MyButton(props) {
    if (props.isShow) {
        return (
            <Button variant="dark" onClick={() => toStile({text: props.text})}>
                Узнать больше
            </Button>
        );
    }
}

function MyCard(props) {
    return (
        <Card className="" >
            <Card.Img
                variant="top"
                src={props.image}
            />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <MyButton text={props.tp} isShow={props.isShow}/>
            </Card.Body>
        </Card>
    );
}

function toStile(props) {
    window.location.assign(props.text)
}



class Cards extends Component {
constructor(props) {
    super(props);
}

txt = "Эффективность планирования времени достигается за счёт правильного и регулярного ведения записей. " +
    "Благодоря записи различной поступающей информации, она лучше откладывается и дольше запоминается в голове. " +
    "Просматривание списка дел на день даёт возможность не отвлекаться на лишнее и не тратить силы впустую, что позволяет сэкономить массу энергии и личного времени." +
    "Возможность планировать своё время на дни, недели, месяцы и даже годы вперёд и не забывать о приоритетных задачах." +
    "Благодаря регулярной записи мелких и незначительных на первый взгляд задач, можно позволить очистить мозг от лишней информации, не держать её весь день в голове, опасаясь что-то забыть, и, соответственно эффективнее работать." +
    "Планировать свой день очень просто, если научиться выбирать главные дела на день, определять сроки, соблюдать самодисциплину, мыслить масштабно, отдыхать и доводить начатое до конца. "

render() {
    if (this.props.isShowThreeCards) {
        return (
            <>
                <Container className="mt-3">
                    <h4 className="text-center m-3 mt-5">
                        Обрети баланс в жизни: создай свою систему личной продуктивности.
                    </h4>
                    <CardGroup>
                        <MyCard
                            image={"https://cs13.pikabu.ru/avatars/398/x398393-1117678525.png"}
                            title={"В чём польза?"}
                            text={"blablabla"}
                            tp={"http://localhost:3000/style1"}
                            isShow={true}
                        />
                        <MyCard
                            image={"https://cs13.pikabu.ru/avatars/398/x398393-1117678525.png"}
                            title={"Оформление"}
                            text={""}
                            tp={"http://localhost:3000/style2"}
                            isShow={true}
                        />
                        <MyCard
                            image={"https://cs13.pikabu.ru/avatars/398/x398393-1117678525.png"}
                            title={"Системы видения"}
                            text={""}
                            tp={"http://localhost:3000/style3"}
                            isShow={true}
                        />
                    </CardGroup>
                </Container>
            </>
        );
    }
    else {
        return (
            <Container className="mt-5">
                <CardGroup>
                    <MyCard
                        image={"https://cs13.pikabu.ru/avatars/398/x398393-1117678525.png"}
                    />
                    <MyCard
                        title={"Planer"}
                        text={this.txt}
                    />
                </CardGroup>
            </Container>
        );
    }
}
}

export default Cards;





