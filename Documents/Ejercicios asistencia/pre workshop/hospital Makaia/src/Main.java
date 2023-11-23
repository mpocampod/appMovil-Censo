import java.util.Date;

public class Main {
    public static void main(String[] args) {

        // Se crea el hospital
        Hospital hospital = new Hospital();

        // Se crean los tipos de usuario con los atributos pedidos
        UsuarioEps usuarioEps = new UsuarioEps("Sofia ", "Diaz", 20938493, "sdiaz@gmail.com");
        UsuarioParticular usuarioParticular = new UsuarioParticular("Jaime ", "Cano", 293847592, "jaimeca@hotmail.com");
        UsuarioPoliza usuarioPoliza = new UsuarioPoliza("Juan ", "Yepes ", 938462881, "juanyepes@gmail.com");

        // Se definen las especialidades con los atributos
        Especialidad medicoGeneral = new Especialidad("Jorge Perez", 234, "Médico general");
        Especialidad medicoDeportologo = new Especialidad("Vanesa Matute", 958, "Médica deportologa");
        Especialidad medicoInternista = new Especialidad("Laura Uribe", 958, "Médica internista");

        Date fecha = new Date();

        // Se agenda la cita de aceurdo al tipo de usuario
        double valorCitaUsuarioEps = hospital.agendarCita(medicoGeneral, usuarioEps, fecha);
        double valorCitaUsuarioPoliza = hospital.agendarCita(medicoInternista, usuarioPoliza, fecha);
        double valorCitaUsuarioParticular = hospital.agendarCita(medicoDeportologo, usuarioParticular, fecha);

        // Se muestra por consola el precio base dependiendo del tipo de usuario
        System.out.println("El valor para la cita de un usuario de la EPS es : " + valorCitaUsuarioEps);
        System.out.println("El valor para la cita de un usuario de la poliza es : " + valorCitaUsuarioPoliza);
        System.out.println("El valor para la cita de un usuario particular es : " + valorCitaUsuarioParticular);

    }
}
