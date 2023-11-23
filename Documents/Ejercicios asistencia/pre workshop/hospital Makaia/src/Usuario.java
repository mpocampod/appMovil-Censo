public abstract class Usuario {
    protected String nombre, apellido, correo;
    protected int cedula;

    // constructor con los datos del usuario
    public Usuario(String nombre, String apellido, int cedula, String correo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.cedula = cedula;

    }

    // metodo que va a contener el tipo de usuario
    public abstract String obtenerTipo();
}
