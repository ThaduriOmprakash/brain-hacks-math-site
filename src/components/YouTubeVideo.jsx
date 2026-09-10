export default function YouTubeVideo({ videoId, title }) {
  return (
    <section className="mt-10" aria-label={`${title} video lesson`}>
      <h2 className="text-2xl">Video lesson</h2>
      <div className="mt-4 aspect-video overflow-hidden rounded-wobbly-md border-2 border-pencil bg-erased shadow-[3px_3px_0px_0px_rgba(45,45,45,0.15)]">
        {videoId ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="grid h-full place-items-center p-6 text-center">
            <div>
              <p className="font-heading text-3xl">Video coming soon</p>
              <p className="mt-2 text-pencil/70">
                A step-by-step lesson for this trick will be added here.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
