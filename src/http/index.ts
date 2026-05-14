import type ICategoria from '@/interfaces/ICategoria';
import type IReceita from '@/interfaces/IReceita';

async function obterDadosURL<T>(url: string) {
    const resposta = await fetch(url);
    return resposta.json() as T;
}

export async function obterCategorias() {
    return obterDadosURL<ICategoria[]>(
        'https://gist.githubusercontent.com/InacioSouza/55338218095f3c70cb9f7c70beafc838/raw/4cff00f050a204ca3272b65ef227d0a0e2e77d41/ingredientes-projetinho-cooking-up.json'
    );
}

export async function obterReceitas() {
    return obterDadosURL<IReceita[]>(
        'https://gist.githubusercontent.com/InacioSouza/6fa92cdc52d7c2c26eac469afc5a7fd2/raw/4cdf4393998c5c5de3d62883ad0ec64b1fb6cfb0/receitas-projetinho-cooking-up.json'
    );
}