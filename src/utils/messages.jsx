// eta error show korarno jsx 
export const showError = (error, message) => {
    if (error) return <div className="alert alert-danger">
        {message}
    </div>
}

// eta success ta show korarnor jnno

export const showSuccess = (success, message) => {
    if (success) {
        return <div className="alert alert-success">{message}</div>
    }
}


// eta loading er jnno  

export const showLoading = (loading) => {
    if (loading) {
        return <div className="alert alert-info">
            Loading ...
        </div>
    }
}