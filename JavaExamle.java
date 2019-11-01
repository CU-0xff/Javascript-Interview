public class AnimalFactory {
        	
        public static Animal createAnimal(String type)
        {
                    switch(type)
                    {
                    case "cat":
                                return new Cat();
                    case "cow":
                                return new Cow();
                    case "dog":
                                return new Dog();
                    default:
                                return new Cat();
                    }
        }
 
}