<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import ="com.sample.model.Records" %>
<%@ page import="java.util.ArrayList" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Гостевая книга</title>
    <link rel="stylesheet" href="css/common.css">
</head>
<body>
    <div class="guestbook">
        <h1>
            Гостевая книга
        </h1>
        <div>
            <h2> Записи гостей: </h2>
        </div>
        <div class="guestbook__list">
           <%
               ArrayList<Records> records = (ArrayList<Records>)request.getAttribute("records");
               for (Records r : records) {
           %>
             <div class="record">
                <div class="record__name">
                    <%= r.name %>
                </div>
                <div class="record__review">
                    <%= r.review %>
                </div>
             </div>
           <%
               }
           %>
        </div>
        <div>
            <h2> Добавить новую запись: </h2>
        </div>
        <form action="/" method="post" id="post-form">
            <div class="inputs">
                <div class="inputs__col">
                    <textarea name="USER_REVIEW" id="USER_REVIEW" class="textarea" placeholder="Ваш отзыв" required></textarea>
                </div>
                <div class="inputs__col inputs__col-right">
                    <input name="USER_NAME" id="USER_NAME" class="input" type="text" placeholder="Ваше имя" required />
                    <div class="btn-c">
                        <div id="review-send-btn">
                            <input type="submit" name="submit" value="submit" class="btn-c__btn" />
                        </div>
                    </div>
                    <div class="btn-response">

                    </div>
                </div>
            </div>
        </form>

    </div>
    <script src="js/jquery.min.js"></script>
    <script src="js/common.js"></script>
</body>
</html>