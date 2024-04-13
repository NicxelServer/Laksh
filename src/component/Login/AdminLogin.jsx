import React, { useState } from 'react';
import { Button, Flex, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Spinner, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { getItem } from '../../utility/localStorage'; // Import getItem function
import { adminLogin } from '../../redux/Authentication/auth.action'; // Assuming adminLogin is defined in auth.action

const AdminLogin = ({handlechenge, Registarion, handleLogin, setRegistarion, setConform, cred, conform, handleLogout, admin}) => {
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isLoading } = useSelector((store) => store.auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleAdminLogin = async () => {
        try {
            const adminData = { email, password }; // Prepare the data to send to the API

            // Make API call to adminlogs endpoint
            let result = await fetch("http://localhost:8000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: 'application/json'
                },
                body: JSON.stringify(adminData)
            });

            if (!result.ok) {
                throw new Error(`HTTP error! Status: ${result.status}`);
            }

            result = await result.json();
            console.log("API Response:", result);
            window.location.reload();
            

            // Dispatch adminLogin action with email and password
            //dispatch(adminLogin(email, password));

            // Assuming your action updates the state upon successful login
            const user = getItem("userData");
            if (user && user.token) {
                onClose(); // Close the modal
            } else {
                // Handle login failure, show error message or toast
            }
        } catch (error) {
            console.error("Error during admin login:", error);
            // Handle error as needed
        }
    };

    return (
        <div>
            <Button
                onClick={onOpen}
                m="5px 0px"
                fontSize={{ base: "12px", md: "14px" }}
                fontFamily="arial"
                background="-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))"
                colorScheme="#fff"
                size="sm"
            >
                Admin Login
            </Button>
            <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody textAlign={"center"} pb={6}>
                        <Flex mt={20} flexDirection={"column"} gap={2}>
                            <Heading color={"#333"}>Login</Heading>
                            <Input
                                placeholder="User name  : admin@admin.com"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></Input>
                            <Input
                                placeholder="Password :admin@2"
                                type={"password"}
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></Input>
                            <Button
                                onClick={handleAdminLogin}
                                fontFamily="arial"
                                background="-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))"
                                colorScheme="#fff"
                                mr={3}
                            >
                                {isLoading ? <Spinner /> : "Login"}
                            </Button>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default AdminLogin;