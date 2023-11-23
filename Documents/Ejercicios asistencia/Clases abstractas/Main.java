public class Main {
    public static void main(String[] args) {

        // Se crean los objetos de las clases hijas con los atributos propios y de la
        // clase padre

        Cuadrado cuadrado = new Cuadrado("verde", 3.0);
        Triangulo triangulo = new Triangulo("morado", 9.0, 5.0);

        // se muestra por consola el llamado de los metodos que habiamos creado
        System.out.println("El cuadrado " + cuadrado.getColor() + " tiene un área de: " + cuadrado.calcularArea()
                + " con un lado de: " + cuadrado.getLado());
        System.out.println("El triángulo " + triangulo.getColor() + " tiene un área de: " + triangulo.calcularArea()
                + " con una base de: " + triangulo.getBase() + " y una altura de: " + triangulo.getAltura());

    }
}
