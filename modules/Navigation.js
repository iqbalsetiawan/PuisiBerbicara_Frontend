import { Flex, Heading, Spacer, IconButton, useMediaQuery, HStack, Link } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

export default function Navigation() {
    const [isDesktop] = useMediaQuery('(min-width: 500px)')
    return (
        <Flex p="2" height="36" alignItems="flex-start" bgGradient="linear(to-b, gray.900, gray.700)">
            <HStack align="flex-end" width="full" spacing="18">
                <Heading>
                    Puisi Berbicara
                </Heading>
                {
                    isDesktop ? (
                        <HStack align="flex-end" spacing="6">
                            <Link>
                                Terbaru
                            </Link>
                            <Link>
                                Puisi
                            </Link>
                            <Link>
                                Tentang Saya
                            </Link>
                        </HStack>
                    ) : (
                        <>
                            <Spacer />
                            <IconButton
                                variant="ghost"
                                icon={
                                    <HamburgerIcon />
                                }
                            />
                        </>
                    )
                }
            </HStack>
        </Flex>
    );
}