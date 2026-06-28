import { comments } from "../data";

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }) {
    const {id} = await params
    const comment = comments.find((comment) => comment.id === parseInt(id));
    if(comment)
        return Response.json(comment,{status:200})
}

export async function PATCH(
    _request:Request,
    {params} : {params : Promise<{id:string}>}
) {
    const {id} = await params;
    const body = await _request.json()
    const {text} = body


    // const comment = comments.find((comment) => comment.id === parseInt(id));
    const index = comments.findIndex((comment)=> comment.id === parseInt(id));
    comments[index].text = text
    if(index !== -1) {
        comments[index].text = text
        return Response.json(comments[index],{status:200})
    }
    return Response.json({message:"Comment not found"},{status:404})
}

export async function DELETE(
    _request:Request,
    {params}:{params:Promise<{id:string}>}
) {
    const {id} = await params;
    const index = comments.findIndex((comment)=> comment.id ===parseInt(id));
    if(index !== -1){
        const deletedComment = comments[index]
        comments.splice(index,1)
       return Response.json(deletedComment,{status:200})
    }
    return Response.json({"msg":"Comment not found"},{status:404,})
}