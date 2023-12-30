import React from 'react'
import { sum } from "@estudos/utils/math/sum"

export default function HomeScreen() {
  return (
    <>
      <h1>Home</h1>
      <p>Importando módulo local: sum (9, 9): {sum(9, 9)}</p>
    </>
  )
}
