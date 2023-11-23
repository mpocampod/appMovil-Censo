package ejer6;

public class Operaciones {
    public static void main(String[] args) {
        UsuarioImpl usuarioImpl = new UsuarioImpl();

        Usuario nuevoUsuario = new Usuario(1, 1029305, 30029485, "Maria", "Calle 7 #3");

        usuarioImpl.guardar(nuevoUsuario);

        nuevoUsuario = usuarioImpl.buscar(1);

        usuarioImpl.editar(1, nuevoUsuario);

        usuarioImpl.eliminar(1);
    }
}