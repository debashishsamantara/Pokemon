'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import { toast } from "sonner";

export default function Home() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const router = useRouter();
  const fetchAllPokemons = async () => {
    const response = await axios.get('https://dummyapi.online/api/pokemon')
    .then(response => setPokemons(response.data))
    .catch(error => {
      toast.error('error in fetching api');
      console.log(error);
    })
  }
  
  useEffect(() => {
    fetchAllPokemons();
  }, []);

  const onLogOut = async () => {
    try {
      axios.get('/api/users/logout')
      toast.success("Logout successful")
      router.push('/login')
      router.refresh();
    } catch (error: any) {
      toast.error("Log out unsuccessful")
    }
  }

  return (
    <div className="flex flex-col">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:m-3 gap-2">
        {pokemons.map(pokemon => (
          <li key={pokemon.id}>
            <Card>
              <CardHeader>
                <CardTitle>{pokemon.pokemon}</CardTitle>
                <CardDescription>{pokemon.type} type pokemon</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={pokemon.image_url} width={500} height={500} alt="Picture of the author"/>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
      <Button onClick={onLogOut} className="self-center mb-2 hover:bg-slate-800">Log out</Button>
    </div>
  )
}
