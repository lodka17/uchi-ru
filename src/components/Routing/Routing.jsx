import React from "react";
import { Route, Switch } from "react-router-dom";
import { RegistrationBL } from "../../components-bl/RegistrationBL/RegistrationBL";
import { ErrorPage } from "../404/404";
import { StartingForm } from "../StartingForm";

export const Routing = () => (
        <Switch>
            <Route exact path="/">
                <StartingForm />
            </Route>
            <Route exact path="/help">
                <div>Помощь</div>
            </Route>
            <Route exact path="/chat">
                <div>Чат</div>
            </Route>
            <Route exact path="/faculties">
                <div>Факультеты</div>
            </Route>
            <Route exact path="/store">
                <div>Магазин</div>
            </Route>
            <Route exact path="/archive">
                <div>Архив</div>
            </Route>
            <Route exact path="/questions">
                <div>Вопросы</div>
            </Route>
            <Route exact path="/answers">
                <div>Ответы</div>
            </Route>
            <Route exact path="/profile">
                <div>Профиль</div>
            </Route>
            <Route exact path="/register">
                <RegistrationBL />
            </Route>
            <Route exact path="/confirm_email">
                <div>Подтверждение мыла</div>
            </Route>
            <Route path="*">
                <ErrorPage/>
            </Route>
        </Switch>
)
