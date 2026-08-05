# stay-in.co.uk static site

Each live property has its own folder at the site root so its URL stays clean:

```text
https://stay-in.co.uk/berwynhouse/
https://stay-in.co.uk/next-property/
```

```text
outputs/
├── index.html                 # Main fallback / "Oops" page
├── assets/                    # Shared images, videos and site resources
│   ├── images/
│   └── videos/
├── berwynhouse/
│   └── index.html             # https://stay-in.co.uk/berwynhouse/
└── README.md                  # Notes for adding future properties
```

## Adding a property

1. Duplicate the `berwynhouse` folder and rename it using the property URL slug, for example `oakview`.
2. Update that folder's `index.html` with the new property content.
3. Keep shared media in `assets/images` or `assets/videos`; property pages reference it using `../assets/...`.
Do not create empty property folders in advance. Add a folder when its guide content is ready.
