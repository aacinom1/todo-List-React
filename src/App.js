import { useState, useEffect } from "react"
import AddTodoButton from "./Components/AddTodoButton"
import { Container, CssBaseline } from "@mui/material"
import TodoListComponent from "./Components/TodoListComponent"
import ModalComponent from "./Components/ModalComponent"
import uuid from "react-uuid"
import { useFormik } from "formik"

const getCurrentDate = () => {
	const current = new Date()
	return current.toISOString().slice(0, 10)
	
}

function App() {
	const [todos, setTodos] = useState([])
	const [isDialogOpen, setIsDialogOpen] = useState(false)
	const [isEditMode, setIsEditMode] = useState(false)
	const [editedTodo, setEditedTodo] = useState({})
	const [statusChange, setStatusChanged] = useState("")

	useEffect(() => {
		if (!isDialogOpen) {
			if (isEditMode) setIsEditMode(false)
		}
	})
	useEffect(() => {
		if (isEditMode) {
			formik.values.todoText = editedTodo.val
			formik.values.status = editedTodo.status
			formik.values.dueDate = editedTodo.dueDate
		}
	}, [isEditMode])

	const formik = useFormik({
		initialValues: {
			todoText: "",
			status: "",
			dueDate: getCurrentDate(),
		},
	})

	const handleDialogOpen = () => {
		setIsDialogOpen(true)
	}

	const handleDialogClose = () => {
		setIsDialogOpen(false)
		{
			isEditMode && setIsEditMode(false)
		}
	}

	const handleSubmit = (e) => {
		const { todoText, status, dueDate } = formik.values
		if (!isEditMode) {
			setTodos([
				...todos,
				{ id: uuid(), val: todoText, status: status, dueDate: dueDate },
			])
		} else {
			const newTodos = [...todos]
			const t = newTodos.find((t) => t.id === editedTodo.id)
			t.val = todoText
			t.status = status
			t.dueDate = dueDate
			setIsEditMode(false)
			setEditedTodo({})
			setTodos(newTodos)
		}
		setIsDialogOpen(false)
		formik.values.todoText = ""
		formik.values.status = ""
		formik.values.dueDate = getCurrentDate()
	}

	const handleDelete = (id) => {
		const newTodos = [...todos]
		setTodos(newTodos.filter((t) => t.id !== id))
	}

	const handleEdit = (todo) => {
		setIsDialogOpen(true)
		setIsEditMode(true)
		setEditedTodo(todo)
	}

	const handleStatusChange = (status) => {
		setStatusChanged(status)
	}

	return (
		<>
			<CssBaseline />
			<Container
				style={{
					padding: "2rem",
					height: "100vh"
				}}
			>
				<AddTodoButton handleFabClick={handleDialogOpen} />

				<TodoListComponent
					todos={todos}
					handleDelete={handleDelete}
					handleDialogOpen={handleDialogOpen}
					handleEdit={handleEdit}
					handleStatusChange={handleStatusChange}
				/>
				<ModalComponent
					open={isDialogOpen}
					handleClose={handleDialogClose}
					handleSubmit={handleSubmit}
					formik={formik}
					isEditMode={isEditMode}
				/>
			</Container>
		</>
	)
}

export default App
