public abstract class Figuras {

    // Se define la propiedad color para la clase abstracta
    private String color;

    // Se crea el constructor de la clase
    public Figuras(String color) {
        this.color = color;
    }

    // se crea el metodo abstracto en donde la logica esta en cada figura
    public abstract double calcularArea();

    // se crea el metodo de la clase abstracta para obtener el color
    public String getColor() {
        return color;
    }

}