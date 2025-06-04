public function index()
{
    return request()->user()->flashcards()->latest()->get();
}

public function store(Request $request)
{
    return $request->user()->flashcards()->create($request->validate([
        'front' => 'required|string|max:255',
        'back' => 'required|string'
    ]));
}

public function review(Flashcard $flashcard, Request $request)
{
    $flashcard->update([
        'difficulty' => $request->difficulty,
        'next_review_at' => now()->addDays($request->difficulty)
    ]);
    return response()->json(['message' => 'Review logged']);
}