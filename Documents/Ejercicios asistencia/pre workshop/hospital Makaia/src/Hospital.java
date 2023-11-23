import java.util.Date;

public class Hospital {

    public Date fecha;

    // Se crea el metodo de agendar la cita tomando como atributos las clases que
    // creamos de especialidad y usuario
    // se crea la variable que va a llamar al metodo que tiene la logica
    public double agendarCita(Especialidad especialidad, Usuario usuario, Date fecha) {

        double valorBase = calcularValorBase(usuario);

        return valorBase;
    }

    // la lógica que permite distinguir los tipos de usuarios
    public double calcularValorBase(Usuario usuario) {
        String tipoUsuario = usuario.obtenerTipo();
        if ("EPS".equals(tipoUsuario)) {
            return 30000;
        } else if ("Poliza".equals(tipoUsuario)) {
            return 40000;
        } else {
            return 70000;
        }
    }
}
