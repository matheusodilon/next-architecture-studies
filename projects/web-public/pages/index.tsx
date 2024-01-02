import React from 'react'
import { sum } from "@estudos/utils/math/sum"
import { Text } from "@estudos/design-system/components/Text"

export default function HomeScreen() {
  return (
    <>
      <Text tag="h1">Home</Text>
      <Text tag="p">Importando módulo local: sum (9, 9): {sum(9, 9)}</Text>
    </>
  )
}
