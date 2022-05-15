import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function ClosableSnackbar(props) {
    return (
        <Snackbar
            open={props.open}
            autoHideDuration={6000}
            onClose={() => props.setOpen(false)}
        >
            <Alert
                onClose={() => props.setOpen(false)}
                severity={props.error ? "error" : "success"}
                sx={{ width: '100%' }}
            >
                {props.error ? props.error : "Success"}
            </Alert>
        </Snackbar>

    )
}
