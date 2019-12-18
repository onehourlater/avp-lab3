package com.sample;

import com.google.gson.Gson;
import com.sample.model.Records;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;


@WebServlet(
        name = "recordsServlet",
        urlPatterns = "/records"
)
public class GuestbookServlet extends HttpServlet {

    private ArrayList<Records> records = new ArrayList<Records>();

    public void init() throws ServletException {

        // DB simulation

        records.add(new Records("Алексей", "Мы остались довольны услугами отеля, и мы приедем снова."));

        records.add(new Records("Ирина", "Все было, как всегда, отлично, мы благодарим всех сотрудников отеля."));

        records.add(new Records("Григорий и Елена", "Мы остались очень довольны всеми услугами и с нетерпением ждем следующего приезда."));

    }

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        String json = new Gson().toJson(records);

        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        resp.getWriter().write(json);

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        String user_name = req.getParameter("USER_NAME");
        String user_review = req.getParameter("USER_REVIEW");

        records.add(new Records(user_name, user_review));

        String json = new Gson().toJson(records);

        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        resp.getWriter().write(json);

    }
}
