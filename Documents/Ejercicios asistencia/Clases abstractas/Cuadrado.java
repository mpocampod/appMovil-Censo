public class Cuadrado extends Figuras {
    // se define la propiedad del cuadrado
    private double lado;

    // Se crea el constructor de la clase llamando al metodo de la clase padre
    // y el de la clase hija
    public Cuadrado(String color, double lado) {
        super(color);
        this.lado = lado;

    }

    // se crea el metodo que va a tener la clase hija para obtener el lado
    public double getLado() {
        return lado;
    }

    // se sobreecribe el metodo de la clase padre con la logica especifica de la
    // clase
    @Override
    public double calcularArea() {
        return lado * lado;
    }
}
