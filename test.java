public static void main(String[] args) {
    System.out.println("Hello, World!");
    String[] cars;
    cars = new String[5];
    for (int i = 0; i < cars.length; i++) {
        cars[i] = "Car " + (i + 1);
    }
    for (String car : cars) {
        System.out.println(car);
    }

}
