import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { format } from 'date-fns'
import * as events from "events";

function timeConverter(time) {
        console.log('time converter')
        let a = new Date(time * 1000);
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let timeRet = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
        return timeRet;
}




class Comments extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="text-center">Комментарии</h2>
                    </div>
                    <div className="col-lg-6">
                        <div id="comment-field"></div>
                    </div>
                    <div className="col-6">
                        <form onSubmit={this.commendAdd}>
                            <div className="form-group">
                                <label>Имя:</label>
                                <input type="name" className="form-control" id="comment-name" placeholder="Твоё имя"/>
                            </div>
                            <div className="form-group">
                                <label>Комментарий:</label>
                                <input type="name" className="form-control" id="comment-body" placeholder="Твой комментарий" />
                            </div>
                            <div className="form-group ">
                                <button type="submit" name="comment-add" className="btn-primary btn mt-1">Отправить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
    saveComments () {
        console.log('save Comments')
        localStorage.setItem('comments', JSON.stringify(this.comments))
    }

    loadComments() {
        if (localStorage.getItem('comments')) this.comments = JSON.parse(localStorage.getItem('comments'));
        this.showComments();
    }

    showComments() {
        console.log('show comments')
        let commentField = document.getElementById('comment-field');
        let out = '';
        this.comments.forEach(function (item, index, comments) {
            out += `<p class="text-sm-end"><em>${timeConverter(item.time)}</em></p>`;
            out += `<p class="alert alert-secondary">${item.name}: ${item.body}</p>`;
            // out += `<p class="alert alert-secondary">${item.body}</p>`;
        });
        commentField.innerHTML = out;
    }

    comments = [];

    commendAdd = (e) => {
        e.preventDefault();
        let commentName = document.getElementById('comment-name');
        let commentBody = document.getElementById('comment-body');

        let comment = {
            name: commentName.value,
            body: commentBody.value,
            time: Math.floor(Date.now()/1000)
        };
        commentName.value = '';
        commentBody.value = '';
        this.comments.push(comment);

        this.saveComments();
        this.showComments();
        console.log(comment + ' in commandAdd')
    };

}

export default Comments;

