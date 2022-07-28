import {
	Grid,
	Paper,
	Typography,
	ButtonGroup,
	IconButton,
    Chip
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import {orange, red, green, grey } from "@mui/material/colors"


const TodoListComponent = (props) => {
    const colorForStatus = (status) => {
        switch (status) {
            case "In progress":
                return orange[300];
            case "Not started":
                return red[300];
            case "Done":
                return green[300];    
            default:
                return grey[300];
        }
    }
	return (
		<Grid
			container
			direction="column"
			spacing={2}
			style={{ margin: "0.8rem auto" }}
		>
			{props.todos.map((todo) => {
				return (
					<Grid item key={todo.id}>
						<Paper style={{ padding: "1rem" }} elevation={4}>
							<Grid
								container
								justifyContent="space-between"
								alignItems="center"
							>
								<Grid
									item
									style={{ cursor: "pointer" }}
									onClick={() => {
										props.handleEdit(todo)
									}}
								>
									<Typography variant="h6">{todo.val}</Typography>
								</Grid>
								<Grid item>
									<Chip
                                        variant="outlined"
										label={todo.status}
										size="medium"
                                        style= {{backgroundColor: colorForStatus(todo.status), color:'white'}}
										onClick={() => {
											props.handleStatusChange(todo.status)
		
										}}
									/>
								</Grid>
							</Grid>
							<Typography
								variant="body2"
								color="#c2c2c2"
								sx={{ fontStyle: "italic" }}

							>
								Deadline: {todo.dueDate}
							</Typography>
							<ButtonGroup
								variant="text"
								size="small"
								style={{ paddingTop: "1rem" }}
							>
								<IconButton
									color="primary"
									onClick={() => {
										props.handleDelete(todo.id)
									}}
								>
									<DeleteIcon />
								</IconButton>
								<IconButton color="primary">
									<EditIcon
										onClick={() => {
											props.handleEdit(todo)
										}}
									/>
								</IconButton>
							</ButtonGroup>
						</Paper>
					</Grid>
				)
			})}
		</Grid>
	)
}

export default TodoListComponent
