package ejer6;

public interface IUsuario {
    public Usuario buscar(int id);

    public void guardar(Usuario usuario);

    public void editar(int id, Usuario usuario);

    public void eliminar(int id);
}
