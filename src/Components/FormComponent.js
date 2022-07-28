
import {Grid, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material"

const FormComponent = ({formik}) => {
	return (
		<div>
			<form>
				<Grid container direction="column" spacing={2} >
					<Grid item>
						<TextField
							fullWidth
							label="Add Todo Tasks"
							variant="outlined"
							name="todoText"
							onChange={formik.handleChange}
							value={formik.values.todoText}
						/>
					</Grid>
					<Grid item>
						<FormControl variant="outlined" fullWidth>
							<InputLabel id="progressStatus">Status</InputLabel>
							<Select
								labelId="progressStatus"
								label="status"
								name="status"
								onChange={formik.handleChange}
								value={formik.values.status}				
							>
								<MenuItem hidden></MenuItem>
								<MenuItem value="In progress">In progress</MenuItem>
								<MenuItem value="Not started">Not started</MenuItem>
								<MenuItem value="Done">Done</MenuItem>
								
							</Select>
						</FormControl>
					</Grid>
					<Grid item>
						<TextField
							fullWidth
							label="deadline"
							type="date"
							variant="outlined"
							name="dueDate"
							onChange={formik.handleChange}
							value={formik.values.dueDate}
							style={{ width: "100%" }}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</Grid>
				</Grid>
			</form>
		</div>
	)
}

export default FormComponent
