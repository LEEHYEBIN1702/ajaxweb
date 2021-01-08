package common;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/deleteEmp")
public class DeleteEmpServ extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public DeleteEmpServ() {
		super();

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// localhost/AjaxWeb/deleteEmp? empId=210
		String id = request.getParameter("empId");
		id = id == null ? "0" : id; // id 값이 널인 경우.. 널 값을 parseInt하면 오류가 남. 그렇기 때문에 null이면 0으로 처리해주라고 코딩을 하는 것.
		int employeeId = Integer.parseInt(id);
		EmployeeVO vo = new EmployeeVO();
		vo.setEmployeeId(employeeId);

		EmpDAO dao = new EmpDAO();
		if (dao.deleteEmp(vo)) {
			response.getWriter().append("<h1>OK</h1>");
		} else {
			response.getWriter().append("<h1>NG</h1>");
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
