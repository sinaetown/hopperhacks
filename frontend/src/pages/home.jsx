import { useState, useEffect } from "react";
import {
  Box,
  Image,
  SimpleGrid,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Input,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

const Home = () => {
  const ingredientsAvailable = [
    "spaghetti",
    "beef",
    "tomato",
    "onion",
    "garlic",
    "cheese",
    "lettuce",
    "tortilla",
    "chicken",
    "rice",
    "avocado",
    "salmon",
    "egg",
    "potato",
    "spinach",
    "pasta",
    "bell pepper",
    "bread",
    "butter",
    "carrot",
    "bacon",
    "chili",
  ];

  const items = [
    {
      id: 1,
      label: "Spaghetti Bolognese",
      img: "https://images.ctfassets.net/uexfe9h31g3m/6QtnhruEFi8qgEyYAICkyS/ab01e9b1da656f35dd1a721c810162a0/Spaghetti_bolognese_4x3_V2_LOW_RES.jpg?w=768&h=512&fm=webp&fit=thumb&q=90",
      ingredients: ["spaghetti", "beef", "tomato", "onion", "garlic"],
      description: "A classic Italian pasta dish with rich meat sauce.",
      nutrition: { calories: 500, fat: "20g", protein: "30g", carbs: "60g" },
    },
    {
      id: 2,
      label: "Chicken Curry",
      img: "https://slowcookerfoodie.com/wp-content/uploads/2022/03/Spicy-Chicken-Curry-500x500.jpg",
      ingredients: ["chicken", "onion", "garlic", "curry powder", "rice"],
      description: "A flavorful and aromatic curry with tender chicken.",
      nutrition: { calories: 450, fat: "15g", protein: "35g", carbs: "50g" },
    },
    {
      id: 3,
      label: "Vegetable Stir-Fry",
      img: "https://www.mccormick.com/-/media/project/oneweb/mccormick-us/mccormick/recipe-images/stir-fry-vegetables-recipe-800x800.jpg?rev=56e6eec8c7b14887a5c238eb35a20da9&vd=20240606T181334Z&extension=webp&hash=FF02DA13F3817A968D847A8A85B1E48D",
      ingredients: ["bell pepper", "broccoli", "carrot", "soy sauce", "garlic"],
      description: "A quick and healthy vegetable stir-fry with savory sauce.",
      nutrition: { calories: 300, fat: "10g", protein: "8g", carbs: "45g" },
    },
    {
      id: 4,
      label: "Avocado Toast",
      img: "https://veganhuggs.com/wp-content/uploads/2023/02/white-bean-avocado-toast.jpg",
      ingredients: ["bread", "avocado", "egg", "cheese"],
      description: "A healthy and delicious toast topped with avocado & egg.",
      nutrition: { calories: 320, fat: "18g", protein: "12g", carbs: "40g" },
    },
    {
      id: 5,
      label: "Grilled Salmon",
      img: "https://www.allrecipes.com/thmb/CfocX_0yH5_hFxtbFkzoWXrlycs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-12720-grilled-salmon-i-VAT-4x3-888cac0fb8a34f6fbde7bf836850cd1c.jpg",
      ingredients: ["salmon", "lemon", "garlic", "butter"],
      description: "Perfectly grilled salmon with a hint of lemon and garlic.",
      nutrition: { calories: 380, fat: "25g", protein: "40g", carbs: "5g" },
    },
    {
      id: 6,
      label: "Classic Cheeseburger",
      img: "https://tornadoughalli.com/wp-content/uploads/2023/06/THE-BEST-CHEESEBURGER-RECIPE-FINALS-3-1.jpg",
      ingredients: ["beef patty", "cheese", "lettuce", "tomato", "bun"],
      description: "A juicy grilled cheeseburger with fresh toppings.",
      nutrition: { calories: 650, fat: "35g", protein: "45g", carbs: "50g" },
    },
    {
      id: 7,
      label: "Margarita Pizza",
      img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2Fb36036a54e1cf9c084f4b702a63e5a08f1e98983",
      ingredients: ["pizza dough", "tomato sauce", "mozzarella", "basil"],
      description: "Classic Italian pizza with fresh basil and mozzarella.",
      nutrition: { calories: 600, fat: "22g", protein: "30g", carbs: "70g" },
    },
    {
      id: 8,
      label: "Caesar Salad",
      img: "https://cdn.loveandlemons.com/wp-content/uploads/2024/12/caesar-salad.jpg",
      ingredients: ["lettuce", "chicken", "cheese", "croutons", "dressing"],
      description: "A crisp and fresh Caesar salad with grilled chicken.",
      nutrition: { calories: 300, fat: "15g", protein: "25g", carbs: "20g" },
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe); // Set selected recipe
    onOpen(); // Open the modal
  };

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box maxW="1300px" mx="auto" px={4}>
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box textAlign="center" mb="30px">
          <Heading fontSize="4xl" fontWeight="bold" color="gray.800">
            What are you cooking today?
          </Heading>
        </Box>
      </motion.div>

      {/* Search Bar */}
      <Flex justify="center" mb={10}>
        <Box width="50%">
          <Input
            placeholder="Search for a recipe..."
            size="lg"
            bg="white"
            border="1px solid black"
            borderRadius="full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            _focus={{
              borderColor: "green.400",
              boxShadow: "0 0 10px rgba(72, 187, 120, 0.5)",
            }}
          />
        </Box>
      </Flex>

      {/* Recipe Cards */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                maxW="340px"
                borderRadius="lg"
                overflow="hidden"
                bg="white"
                cursor="pointer"
                onClick={() => handleRecipeClick(item)}
                _hover={{ transform: "scale(1.02)", transition: "0.2s" }}
              >
                <Image
                  src={item.img}
                  alt={item.label}
                  width="100%"
                  height="240px"
                  objectFit="cover"
                  borderRadius={"10px"}
                />
                <Box p={4}>
                  <Text fontSize="lg" fontWeight="bold" mb={1}>
                    {item.label}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {item.description}
                  </Text>
                </Box>
              </Box>
            </motion.div>
          ))}
        </AnimatePresence>
      </SimpleGrid>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay backdropFilter="blur(5px)" />
          <ModalContent borderRadius="lg">
            <ModalHeader>{selectedRecipe.label}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image
                src={selectedRecipe.img}
                alt={selectedRecipe.label}
                width="100%"
                maxHeight="350px"
                borderRadius="lg"
                objectFit="cover"
                mb={4}
              />
              <Text fontSize="lg" fontWeight="bold">
                Ingredients:
              </Text>
              <Text fontSize="md" color="gray.700">
                {selectedRecipe.ingredients.join(", ")}
              </Text>
              <Text fontSize="lg" fontWeight="bold" mt={4}>
                Description:
              </Text>
              <Text fontSize="md" color="gray.700">
                {selectedRecipe.description}
              </Text>
              <Text fontSize="lg" fontWeight="bold" mt={4}>
                Nutrition:
              </Text>
              <Text fontSize="md" color="gray.700">
                Calories: {selectedRecipe.nutrition.calories} kcal
              </Text>
              <Text fontSize="md" color="gray.700">
                Fat: {selectedRecipe.nutrition.fat}
              </Text>
              <Text fontSize="md" color="gray.700">
                Protein: {selectedRecipe.nutrition.protein}
              </Text>
              <Text fontSize="md" color="gray.700">
                Carbs: {selectedRecipe.nutrition.carbs}
              </Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default Home;
