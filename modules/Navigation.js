import {
    Flex,
    Heading,
    Spacer,
    IconButton,
    useMediaQuery,
    HStack,
    Link,
    useDisclosure,
    Box,
    VStack,
 } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

function Menu() {
    return (
        <>
            <Link>
                Terbaru
            </Link>
            <Link>
                Puisi
            </Link>
            <Link>
                Tentang Saya
            </Link>
        </>
    );
}

export default function Navigation() {
    const [isDesktop] = useMediaQuery('(min-width: 500px)')
    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <Flex p="2" height="36" alignItems="flex-start" bgGradient="linear(to-b, gray.900, gray.700)">
            <HStack align="flex-end" width="full" spacing="18">
                <Heading>
                    Puisi Berbicara
                </Heading>
                {
                    isDesktop ? (
                        <HStack align="flex-end" spacing="6">
                            <Menu />
                        </HStack>
                    ) : (
                        <>
                            <Spacer />
                            <IconButton
                                variant="ghost"
                                onClick={onOpen}
                                display={isOpen ? 'none' : 'block'}
                                icon={
                                    <HamburgerIcon />
                                }
                            />
                            <Box
                                display={isOpen ? 'flex' : 'none'}
                                position="absolute"
                                top="0"
                                left="0"
                                width="100%"
                                height="100vh"
                                backgroundColor="gray.800"
                                opacity="0.8"
                            >
                                <IconButton
                                    pos="absolute"
                                    top="3"
                                    right="3"
                                    onClick={onClose}
                                >
                                    <CloseIcon />
                                </IconButton>
                                <VStack alignItems="flex-start" padding="8" spacing="10">
                                    <Menu />
                                </VStack>
                            </Box>
                        </>
                    )
                }
            </HStack>
        </Flex>
    );
}