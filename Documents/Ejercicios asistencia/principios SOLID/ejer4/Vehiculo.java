package ejer4;

public abstract class Vehiculo {

    public String marca;
    public int numLlantas, capacidad;

    public Vehiculo(String marca, int numLlantas, int capacidad) {
        this.marca = marca;
        this.numLlantas = numLlantas;
        this.capacidad = capacidad;
    }

}
