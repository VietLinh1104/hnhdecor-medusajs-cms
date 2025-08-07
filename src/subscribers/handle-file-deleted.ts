import { SubscriberArgs, SubscriberConfig } from "@medusajs/framework"
import { deleteFilesWorkflow } from "@medusajs/medusa/core-flows"

export default async function handleFileDeleted({
  event: { data },
  container,
}: SubscriberArgs<{ id: string }>) {
  await deleteFilesWorkflow(container).run({
    input: { ids: [data.id] },
  })
}

export const config: SubscriberConfig = {
  event: "file.deleted", // hoặc sự kiện phù hợp với use case của bạn
}