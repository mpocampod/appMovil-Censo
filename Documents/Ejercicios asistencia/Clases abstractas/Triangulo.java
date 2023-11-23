public class Triangulo extends Figuras {
    // se define la propiedad del triangulo
    private double base, altura;

    // Se crea el constructor de la clase llamando al metodo de la clase padre
    // y el de la clase hija
    public Triangulo(String color, double base, double altura) {
        super(color);
        this.base = base;
        this.altura = altura;
    }

    // se crea el metodo que va a tener la clase hija para obtener la base
    public double getBase() {
        return base;
    }

    // se crea el metodo que va a tener la clase hija para obtener la altura
    public double getAltura() {
        return altura;
    }

    // se sobreecribe el metodo de la clase padre con la logica especifica de la
    // clase
    @Override
    public double calcularArea() {
        return (base * altura) / 2;
    }

}
