package common.board;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/insertBoard")
public class PutBoardServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public PutBoardServlet() {
        super();
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		BoardDAO dao = new BoardDAO();
		List<BoardVO> list = dao.getBoradList();
		String data = "<dataset>";
	for (BoardVO vo : list) {
		data += "<record>";
		data += "<board_no>"+vo.getBoardNo()+"</board_no>"
			    +"<title>"+vo.getTitle()+"</title>"
			    +"<content>"+vo.getContent()+"</content>"
			    +"<writer>"+vo.getWriter()+"</writer>"
			    +"<creation_date>"+vo.getCreationDate()+"</creation_date>";
		data += "</record>";
	}
	    data += "</dataset>";
	    response.getWriter().append(data);
	}
//		String title = request.getParameter("title");
//		String content = request.getParameter("content");
//		String writer = request.getParameter("writer");
//		
//		BoardVO vo = new BoardVO();
//		vo.setTitle(title);
//		vo.setContent(content);
//		vo.setWriter(writer);
//		
//		BoardDAO dao = new BoardDAO();
//		
//		if (dao.insertBoard(vo)) {
//			response.getWriter().append("<h1>OK</h1>");	
//		} else {
//			response.getWriter().append("<h1>NG</h1>");
//		}
//	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
