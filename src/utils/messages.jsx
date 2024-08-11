// eta error show korarno jsx 
export const showError = (error, message) => {
    if (error) return <div className="alert alert-danger">
        {message}
    </div>
}

// eta success ta show korarnor jnno



// eta loading er jnno  

export const showLoading = (loading) => {
    if (loading) {
        return <div className="alert alert-info">
            Loading ...
        </div>
    }
}